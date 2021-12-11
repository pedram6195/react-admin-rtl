import { useMediaQuery } from "@material-ui/core";
import BrandIcon from "@material-ui/icons/Book";
import * as React from "react";
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  SimpleList,
  TextField,
  TextInput
} from "react-admin";

const BrandList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down("sm"));
  return (
    <List filters={BrandFilters} {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => `${record.code} code`}
          tertiaryText={() => new Date(2021, 9, 25).toLocaleDateString()}
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="code" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

const BrandFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
    <SelectInput optionText="name" />
  </ReferenceInput>
];

export default { list: BrandList, icon: BrandIcon };
