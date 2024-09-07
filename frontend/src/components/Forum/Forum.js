import React, { useEffect, useState } from "react";
import "./Forum.css";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../../firebase";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { getAuth } from "firebase/auth";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { AiOutlineLike, AiFillLike } from "react-icons/ai"; // Importing the icons
import { FaShare } from "react-icons/fa";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]); // State to track liked posts
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const { id } = useParams();
  const [shareLinkOpen, setShareLinkOpen] = useState(false); // New state for share link dialog
  const [shareLink, setShareLink] = useState(""); // State to store the share link

  const [openCollectionDialog, setOpenCollectionDialog] = useState(false);
  const [collectionName, setCollectionName] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const auth = getAuth();
  const user = auth.currentUser;

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  useEffect(() => {
    const fetchLikedPosts = async () => {
      if (!user) return;

      try {
        const userSummariesDocRef = doc(firestore, "Summaries", user.uid);
        const userSummariesDoc = await getDoc(userSummariesDocRef);

        if (userSummariesDoc.exists()) {
          const userSummariesData = userSummariesDoc.data();
          const summaries = userSummariesData.Summaries || [];

          // Extract the names of summaries that the user has liked
          const likedSummaryNames = summaries
            .filter(
              (summary) => summary.likes && summary.likes.includes(user.uid)
            )
            .map((summary) => summary.name);

          setLikedPosts(likedSummaryNames);
        }
      } catch (error) {
        console.error("Error fetching liked summaries:", error);
      }
    };

    fetchLikedPosts();
  }, [user]);

  const handleOpen = async (post) => {
    try {
      const summariesCollectionRef = collection(
        firestore,
        `Summaries/${post.userId}/${post.name}`
      );

      const summariesSnapshot = await getDocs(summariesCollectionRef);
      if (!summariesSnapshot.empty) {
        const summaryData = summariesSnapshot.docs.map((doc) => doc.data());
        setSelectedPost({ ...post, summaries: summaryData });
        console.log("Summary data:", summaryData);
        setOpen(true);
        navigate(`/forum/post/${post.name}`, { replace: true });
      } else {
        console.error("No documents found in the sub-collection!");
      }
    } catch (error) {
      console.error("Error fetching summary documents:", error);
    }
  };

  const handleShareLinkOpen = (post) => {
    console.log("Opening share link dialog");
    const link = `${window.location.origin}/forum/post/${post.name}`;
    setShareLink(link);
    setShareLinkOpen(true);
  };

  const handleClose = () => {
    setOpen(false); // Close summary dialog
    setShareLinkOpen(false); // Close share link dialog
    setSelectedPost(null); // Clear selected post
    navigate("/forum", { replace: true });
  };

  useEffect(() => {
    const fetchPublicSummaries = async () => {
      try {
        const summariesCollection = collection(firestore, "Summaries");
        const summariesSnapshot = await getDocs(summariesCollection);
        const allSummaries = [];

        for (const docSnapshot of summariesSnapshot.docs) {
          const summaries = docSnapshot.data().Summaries || [];
          const userDocRef = doc(firestore, "Users", docSnapshot.id);
          const userDocSnapshot = await getDoc(userDocRef);
          const username = userDocSnapshot.exists()
            ? userDocSnapshot.data().username
            : "Unknown User";

          summaries.forEach((summary) => {
            if (summary.public) {
              allSummaries.push({
                userId: docSnapshot.id,
                name: summary.name,
                username,
                ...summary,
              });
            }
          });
        }
        setPosts(allSummaries);
      } catch (error) {
        console.error("Error fetching public summaries:", error);
      }
    };
    fetchPublicSummaries();
  }, []);

  useEffect(() => {
    const postName = location.pathname.split("/forum/post/")[1];
    if (postName) {
      const post = posts.find((p) => p.name === postName);
      if (post) {
        handleOpen(post);
      }
    }
  }, [location.pathname, posts]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleDialogClose = () => {
    setOpenCollectionDialog(false);
    setCollectionName("");
    setSelectedPostId(null);
  };

  const handleTopicSelection = (name) => {
    setSelectedTopic(name === "All" ? "" : name); // Select all if "All" is clicked, otherwise select the topic
  };

  // Get unique post names (remove duplicates)
  const uniquePostNames = ["All", ...new Set(posts.map((post) => post.name))];

  const filteredPosts = posts.filter(
    (post) =>
      post.name.toLowerCase().includes(filter.toLowerCase()) && // Filtering by name
      (selectedTopic ? post.name === selectedTopic : true) // Show all posts if no specific topic is selected
  );

  const sortedPosts = filteredPosts.sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  const handleLikeToggle = async (postId) => {
    const postIndex = posts.findIndex((post) => post.name === postId);
    if (postIndex === -1) {
      console.error("Post not found!");
      return;
    }

    const post = posts[postIndex];
    const { userId, name } = post;
    const currentUserId = getAuth().currentUser.uid;

    const alreadyLiked = likedPosts.includes(postId);

    setLikedPosts((prevLikedPosts) =>
      alreadyLiked
        ? prevLikedPosts.filter((id) => id !== postId)
        : [...prevLikedPosts, postId]
    );

    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      const currentLikes = Array.isArray(updatedPosts[postIndex].likes)
        ? updatedPosts[postIndex].likes
        : []; // Default to an empty array if likes is not defined or not an array

      updatedPosts[postIndex] = {
        ...updatedPosts[postIndex],
        likes: alreadyLiked
          ? currentLikes.filter((like) => like !== currentUserId)
          : [...currentLikes, currentUserId],
      };
      return updatedPosts;
    });

    const userSummariesDocRef = doc(firestore, "Summaries", userId);

    try {
      const userSummariesDoc = await getDoc(userSummariesDocRef);
      if (!userSummariesDoc.exists()) {
        console.error("User Summaries document does not exist!");
        return;
      }

      const userSummariesData = userSummariesDoc.data();
      const summaries = userSummariesData.Summaries || [];
      const summaryIndex = summaries.findIndex(
        (summary) => summary.name === name
      );
      if (summaryIndex === -1) {
        console.error("Summary not found in the user's Summaries array!");
        return;
      }

      const summary = summaries[summaryIndex];
      const updatedLikes = Array.isArray(summary.likes) ? summary.likes : [];

      if (alreadyLiked) {
        const index = updatedLikes.indexOf(currentUserId);
        if (index > -1) updatedLikes.splice(index, 1);
      } else {
        updatedLikes.push(currentUserId);
      }

      summaries[summaryIndex] = {
        ...summary,
        likes: updatedLikes,
      };

      await updateDoc(userSummariesDocRef, {
        Summaries: summaries,
      });
    } catch (error) {
      console.error("Error updating like status:", error);
    }
  };

  return (
    <div
      className="forum-layout"
      style={{
        marginTop: "150px",
      }}
    >
      <div className="sidebar">
        <h2 className="header-font">Collections</h2>
        <ul className="text-font">
          {uniquePostNames.map((name) => (
            <li key={name} onClick={() => handleTopicSelection(name)}>
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="forum-container">
        <div className="forum-controls">
          <input
            type="text"
            placeholder="Filter posts..."
            value={filter}
            onChange={handleFilterChange}
            className="filter-input"
          />
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="sort-select"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
        <h1 className="forum-title header-font">Forum</h1>
        <div className="posts-list text-font">
          {sortedPosts.map((post) => (
            <div className="post" key={post.name}>
              <div className="post-header">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <span className="post-user text-font">{post.username}</span>
                  <p className="post-content text-font">Topic: {post.name}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {/* <button
                    onClick={() => handleAddToCollectionClick(post.name)}
                    className="add-to-collection-btn  text-font"
                  >
                    Add to Collection
                  </button> */}
                  <button
                    onClick={() => handleOpen(post)}
                    className="add-to-collection-btn text-font"
                  >
                    View More
                  </button>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLikeToggle(post.name);
                  }}
                  style={{
                    color: likedPosts.includes(post.name)
                      ? "lightblue"
                      : "white",
                    fontSize: "20px",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {likedPosts.includes(post.name) ? (
                    <AiFillLike />
                  ) : (
                    <AiOutlineLike />
                  )}
                  <span style={{ marginLeft: "8px", fontSize: "12px" }}>
                    {Array.isArray(post.likes) ? post.likes.length : 0}
                  </span>
                </span>

                <span onClick={() => handleShareLinkOpen(post)}>
                  <FaShare />{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedPost && (
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              backgroundColor: "#1a1a1a",
              boxShadow: "none",
              color: "white",
            },
          }}
        >
          <DialogTitle
            sx={{
              color: "white",
            }}
          >
            {selectedPost.name}
          </DialogTitle>
          <DialogContent>
            {selectedPost.summaries.map((summary, index) => (
              <DialogContentText
                key={index}
                sx={{
                  color: "white",
                  marginBottom: "16px",
                }}
              >
                <strong>Page:</strong> {summary.page}
                <br />
                {summary.formula && (
                  <>
                    <strong>Formula:</strong> {summary.formula}
                    <br />
                  </>
                )}
                {summary.diagrams && (
                  <>
                    <strong>Diagrams:</strong> {summary.diagrams}
                    <br />
                  </>
                )}
                <strong>Summary:</strong> {summary.summary}
              </DialogContentText>
            ))}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              style={{
                color: "#e848e5",
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {/* Share Link Dialog */}
      <Dialog
        open={shareLinkOpen}
        onClose={() => setShareLinkOpen(false)}
        PaperProps={{
          style: {
            backgroundColor: "#1a1a1a",
            boxShadow: "none",
            color: "white",
            padding: "10px",
            width: "300px",
            margin: "0",
            borderRadius: "20px",
          },
        }}
      >
        <DialogTitle
          style={{
            color: "#e848e5",
          }}
        >
          Share This Post
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{
              color: "white",
            }}
          >
            Copy the link below to share:
          </DialogContentText>
          <br />
          <input
            type="text"
            value={shareLink}
            readOnly
            style={{
              width: "100%",
              padding: "10px",
              background: "transparent",
              color: "white",
              border: "2px solid #e848e5",
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setShareLinkOpen(false)}
            style={{
              color: "#e848e5",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Forum;
