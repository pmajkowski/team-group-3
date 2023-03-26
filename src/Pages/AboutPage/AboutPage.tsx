import React from "react";
import AboutForm from "../../components/about/AboutForm";
import NavigationList from "../../components/Navigation/NavigationList";
import UserNavigationList from "../../components/UserNavigation/UserNavigationList";

function AboutPage(): JSX.Element {
  return (
    <div className="App">
      <UserNavigationList />
      <NavigationList />
      <AboutForm />;
    </div>
  );
}

export default AboutPage;
