import UserIcon from "@material-ui/icons/Group";
import * as React from "react";
import { Admin, Resource } from "react-admin";
import authProvider from "./authProvider";
import Dashboard from "./Dashboard";
import dataProvider from "./dataProvider";
import "./fonts/fonts.css";
import i18nProvider from "./i18nProvider";
import brands from "./brands";
import { RTLProvider, theme } from "./RTL";
import { UserList } from "./users";

const App = () => (
  <RTLProvider>
    <Admin
      dataProvider={dataProvider}
      dashboard={Dashboard}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      theme={theme}
    >
      <Resource name="brands" {...brands} />
      <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
  </RTLProvider>
);

export default App;
