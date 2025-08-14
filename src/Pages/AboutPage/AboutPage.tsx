import React from "react";
import AboutForm from "../../components/about/AboutForm";
import NavigationList from "../../components/Navigation/NavigationList";
import UserNavigationList from "../../components/UserNavigation/UserNavigationList";
import Footer from "../../components/footer/footer";

function AboutPage(): JSX.Element {
  return (
    <div className="App">
      <UserNavigationList />
      <NavigationList />
      <AboutForm />;
      <Footer />;
    </div>
  );
}

export default AboutPage;
