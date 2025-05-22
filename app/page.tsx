"use client";

import React, { useContext, useEffect } from "react";
import MainLayout from "../components/MainLayout";
import ProcessCard from "../components/ProcessCard";
import { MdAccountBalance } from "react-icons/md";
import withAuth from "../components/hocs/withAuth";
import { useModal } from "../components/hooks/useModal";
import UpdateUser from "../components/UpdateUser";
import { store } from "../components/StoreProvider";
import { useTheme } from "next-themes";

const Home = () => {
  const { getModalContent, showModal, closeModal } = useModal(false);
  const {
    state: { activeUser },
  } = useContext(store);
  useEffect(() => {
    if (!activeUser?.name) showModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { setTheme } = useTheme();
  setTheme("system");

  return (
    <MainLayout>
      <h1 className="title">
        Welcome, <span>{activeUser?.name || "user"}</span>
      </h1>
      <div className="processBlock">
        <ProcessCard
          icon={<MdAccountBalance className="accountIcon" size={30} />}
          title="Dashboard"
          linkTo="/dashboard"
          description="Manager account, send and receive money"
        />
      </div>
      {getModalContent(<UpdateUser closeModal={closeModal} />)}
    </MainLayout>
  );
};

export default withAuth(Home);
