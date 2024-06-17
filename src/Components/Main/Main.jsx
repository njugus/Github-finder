import "./Main.css";
import useStore from "./Store";
import { useEffect } from "react";
import { IoLocation } from "react-icons/io5";
import { FaBookBookmark } from "react-icons/fa6";
import { AiOutlineTeam } from "react-icons/ai";
import { FaCodeFork } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

function Main() {
  const {
    GithubName,
    username,
    usernameURL,
    location,
    repos,
    followers,
    following,
    bio,
    loading,
    error, // Add error state
  } = useStore();

  const repoList = useStore((state) => state.repoList);
  const avatar = useStore((state) => state.avatar);
  const followersList = useStore((state) => state.followersList);
  const followingList = useStore((state) => state.followingList);

  const fetchProfileInfo = useStore((state) => state.fetchProfileInfo);
  const fetchRepo = useStore((state) => state.fetchRepo);
  const fetchFollowers = useStore((state) => state.fetchFollowers);
  const fetchFollowing = useStore((state) => state.fetchFollowing);

  useEffect(() => {
    if (username) {
      fetchProfileInfo(username);
      fetchRepo(username);
      fetchFollowers(username);
      fetchFollowing(username);
    }
  }, [username, fetchProfileInfo, fetchRepo, fetchFollowers, fetchFollowing]);

  return (
    <>
      <section className="main-section">
        <div className="main-wrapper">
          <div className="profile-div">
            <div className="github-logo">
              <img src={avatar} alt="a logo of github" className="logo" />
            </div>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <div className="error-message">
                <p>Error: {error}</p>
              </div>
            ) : (
              <div className="profile-heading">
                <div className="item" id="main-name">{GithubName}</div>
                <div className="item">{username}</div>
                <div className="item">{bio}</div>
                <div className="item">
                  <div className="item-tag">
                    <a
                      href={usernameURL}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      View on Github
                    </a>
                  </div>
                </div>
                <div className="item"><IoLocation/> <span></span>{location}</div>
                <div className="item"><FaBookBookmark /><span></span> {repos} repositories</div>
                <div className="item"><AiOutlineTeam /> <span></span>{followers} Followers</div>
                <div className="item"><AiOutlineTeam /> <span></span>{following} Following </div>
              </div>
            )}
          </div>

          {loading ? (
            <p>Loading repositories....</p>
          ) : error ? (
            <div className="error-message">
              <p>Error: {error}</p>
            </div>
          ) : (
            <div className="repository-section">
              <h1>Repositories</h1>
              <div className="repo-wrapper">
                {repoList.map((repo) => (
                  <div className="repo" id={repo.repo_id} key={repo.repo_id}>
                    <div className="top-div">
                      <h2>{repo.repo_name}</h2>
                      <p>{repo.repo_description}</p>
                    </div>
                    <div className="bottom-div">
                      <p><FaCodeFork /> {repo.forks} forks</p>
                      <p><FaStar /> {repo.stars} stars</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h1>Followers</h1>
              </div>
              <div className="followers">
                {followersList.map((follower) => (
                  <div className="follower" key={follower.follower_id}>
                    <div className="image-div">
                      <img src={follower.follower_avatar} alt="image of the follower" className="main-image" />
                    </div>
                    <div className="follower-name">
                      {follower.follower_name}
                    </div>
                    <div className="follower-profile">
                      <a href={follower.follower_url} style={{ color: "white", textDecoration: "none" }}>
                        View {follower.follower_name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h1>Following</h1>
              </div>
              <div className="following">
                {followingList.map((following) => (
                  <div className="follower" key={following.following_id}>
                    <div className="image-div">
                      <img src={following.following_avatar} alt="image of the follower" className="main-image" />
                    </div>
                    <div className="follower-name">
                      {following.following_name}
                    </div>
                    <div className="follower-profile">
                      <a href={following.following_url} style={{ color: "white", textDecoration: "none" }}>
                        View {following.following_name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Main;
