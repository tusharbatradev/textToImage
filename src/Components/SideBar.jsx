import { Box, Button, Drawer, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSideBar,
  setAboutRoute,
  setFavouriteRoute,
  setHomeRoute,
  setSearchRoute,
} from "../Utils/sideBarSlice";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const dispatch = useDispatch();
  const sideBarState = useSelector((state) => state.sideBar);
  const navigate = useNavigate();

  const handleSearchPageNavigation = () => {
    dispatch(closeSideBar());
    dispatch(setSearchRoute());
    navigate("searchnews");
  };

  const handleHomeClick = () => {
    dispatch(closeSideBar());
    navigate("/browse");
    dispatch(setHomeRoute());
  };

  const handleAboutClick = () => {
    dispatch(closeSideBar());
    navigate("/browse/about");
    dispatch(setAboutRoute());
  };

  const handleFavouriteClick = () => {
    dispatch(closeSideBar());
    navigate("/browse/favNews");
    dispatch(setFavouriteRoute());
  }

  return (
    <Drawer
      anchor="left"
      open={sideBarState?.sideBarOpen}
      onClose={() => dispatch(closeSideBar())}
    >
      <Box
        sx={{
          width: 250,
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
        }}
      >
        <img width={"120px"} src={Logo} alt="Logo" />

        <Stack direction={"column"} spacing={3} width={"100%"}>
          {/* Home */}
          <Typography
            onClick={handleHomeClick}
            sx={{
              backgroundColor: sideBarState.homeRoute ? "#eeeeee" : "white",
              padding: "10px",
              fontWeight: 700,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "18px",
            }}
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
                fill="#000000"
              />
            </svg>
            Home
          </Typography>
          {/* Search News */}
          <Typography
            onClick={handleSearchPageNavigation}
            sx={{
              backgroundColor: sideBarState.searchRoute ? "#eeeeee" : "white",
              padding: "10px",
              fontWeight: 700,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "18px",
            }}
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Search News
          </Typography>
          {/* Favourite News */}
          <Typography
            onClick={handleFavouriteClick}
            sx={{
              backgroundColor: sideBarState.favoriteRoute ? "#eeeeee" : "white",
              padding: "10px",
              fontWeight: 700,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "18px",
            }}
          >
            <svg
              width="22px"
              height="22px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Favourite News
          </Typography>
          {/* About */}
          <Typography
            onClick={handleAboutClick}
            sx={{
              backgroundColor: sideBarState.aboutRoute ? "#eeeeee" : "white",
              padding: "10px",
              fontWeight: 700,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "18px",
            }}
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              id="_24x24_On_Light_About"
              data-name="24x24/On Light/About"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect id="view-box" width="24" height="24" fill="none" />
              <path
                id="Shape"
                d="M.75,19.5A.751.751,0,0,1,0,18.75V.75A.751.751,0,0,1,.75,0h14a.751.751,0,0,1,.75.75v11a.755.755,0,0,1-.22.53l-7,7a.755.755,0,0,1-.53.22ZM1.5,18H7V11.75A.75.75,0,0,1,7.75,11H14V1.5H1.5Zm7-1.06,4.44-4.44H8.5Z"
                transform="translate(4.25 2.25)"
                fill="#141124"
              />
            </svg>
            About this App
          </Typography>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default SideBar;
