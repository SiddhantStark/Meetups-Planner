import React, { Fragment } from "react";
import NewMeetUpForm from "../../components/meetups/NewMeetupForm";
//import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils';
import { useRouter } from "next/router";
import Head from "next/head";

function newMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    //console.log(enteredMeetupData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add  a new Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities"
        />
      </Head>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default newMeetupPage;
