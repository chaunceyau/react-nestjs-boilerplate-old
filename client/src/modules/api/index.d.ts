/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MUTATION_CREATE_PROJECT
// ====================================================

export interface MUTATION_CREATE_PROJECT_createProject {
  __typename: "Project";
  id: string;
  title: string;
  description: string | null;
}

export interface MUTATION_CREATE_PROJECT {
  createProject: MUTATION_CREATE_PROJECT_createProject;
}

export interface MUTATION_CREATE_PROJECTVariables {
  title: string;
  description: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProjectAndRequests
// ====================================================

export interface ProjectAndRequests_project_requests_response_owner {
  __typename: "User";
  id: string;
}

export interface ProjectAndRequests_project_requests_response_options_selected {
  __typename: "OptionSelection";
  id: string;
  title: string;
}

export interface ProjectAndRequests_project_requests_response_response_files {
  __typename: "ResponseFile";
  id: string;
  file_name: string;
  aws_file_key: string;
}

export interface ProjectAndRequests_project_requests_response_text_response {
  __typename: "TextResponse";
  id: string;
  text: string;
}

export interface ProjectAndRequests_project_requests_response {
  __typename: "RequestResponse";
  id: string;
  owner: ProjectAndRequests_project_requests_response_owner | null;
  options_selected: ProjectAndRequests_project_requests_response_options_selected[];
  response_files: ProjectAndRequests_project_requests_response_response_files[];
  text_response: ProjectAndRequests_project_requests_response_text_response | null;
}

export interface ProjectAndRequests_project_requests {
  __typename: "Request";
  id: string;
  type: RequestTypes | null;
  title: string;
  complete: boolean;
  description: string | null;
  response: ProjectAndRequests_project_requests_response | null;
}

export interface ProjectAndRequests_project {
  __typename: "Project";
  id: string;
  title: string;
  description: string | null;
  items_completed: number;
  items_requested: number;
  access_code: string | null;
  requests: ProjectAndRequests_project_requests[];
}

export interface ProjectAndRequests {
  project: ProjectAndRequests_project;
}

export interface ProjectAndRequestsVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllProjects
// ====================================================

export interface AllProjects_projects {
  __typename: "Project";
  id: string;
  title: string;
  description: string | null;
  updatedAt: string;
  items_requested: number;
  items_completed: number;
}

export interface AllProjects {
  projects: AllProjects_projects[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getDownloadSignedURL
// ====================================================

export interface getDownloadSignedURL {
  getDownloadSignedURL: string | null;
}

export interface getDownloadSignedURLVariables {
  aws_file_key: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MUTATION_CREATE_NEW_REQUEST
// ====================================================

export interface MUTATION_CREATE_NEW_REQUEST_createRequest_project {
  __typename: "Project";
  id: string;
}

export interface MUTATION_CREATE_NEW_REQUEST_createRequest {
  __typename: "Request";
  id: string;
  title: string;
  description: string | null;
  project: MUTATION_CREATE_NEW_REQUEST_createRequest_project;
}

export interface MUTATION_CREATE_NEW_REQUEST {
  createRequest: MUTATION_CREATE_NEW_REQUEST_createRequest;
}

export interface MUTATION_CREATE_NEW_REQUESTVariables {
  title: string;
  description: string;
  project_id: string;
  type: RequestTypes;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MUTATION_LOGIN_USER
// ====================================================

export interface MUTATION_LOGIN_USER_login {
  __typename: "AuthPayload";
  id: string;
}

export interface MUTATION_LOGIN_USER {
  login: MUTATION_LOGIN_USER_login;
}

export interface MUTATION_LOGIN_USERVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QUERY_GET_SIGNED_URL
// ====================================================

export interface QUERY_GET_SIGNED_URL {
  getSignedURL: string | null;
}

export interface QUERY_GET_SIGNED_URLVariables {
  filename: string;
  contentType: string;
  request_id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MUTATION_CREATE_FILE_REQUEST_RESPONSE
// ====================================================

export interface MUTATION_CREATE_FILE_REQUEST_RESPONSE_createFileRequestResponse {
  __typename: "RequestResponse";
  id: string;
}

export interface MUTATION_CREATE_FILE_REQUEST_RESPONSE {
  createFileRequestResponse: MUTATION_CREATE_FILE_REQUEST_RESPONSE_createFileRequestResponse | null;
}

export interface MUTATION_CREATE_FILE_REQUEST_RESPONSEVariables {
  request_id: string;
  aws_file_key: string;
  file_name: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QUERY_PROJECT_INFORMATION
// ====================================================

export interface QUERY_PROJECT_INFORMATION_projectById_requests_response_response_files {
  __typename: "ResponseFile";
  id: string;
  file_name: string;
  aws_file_key: string;
}

export interface QUERY_PROJECT_INFORMATION_projectById_requests_response_options_selected {
  __typename: "OptionSelection";
  id: string;
}

export interface QUERY_PROJECT_INFORMATION_projectById_requests_response_text_response {
  __typename: "TextResponse";
  id: string;
  text: string;
}

export interface QUERY_PROJECT_INFORMATION_projectById_requests_response {
  __typename: "RequestResponse";
  id: string;
  response_files: QUERY_PROJECT_INFORMATION_projectById_requests_response_response_files[];
  options_selected: QUERY_PROJECT_INFORMATION_projectById_requests_response_options_selected[];
  text_response: QUERY_PROJECT_INFORMATION_projectById_requests_response_text_response | null;
}

export interface QUERY_PROJECT_INFORMATION_projectById_requests {
  __typename: "Request";
  id: string;
  type: RequestTypes | null;
  title: string;
  description: string | null;
  complete: boolean;
  response: QUERY_PROJECT_INFORMATION_projectById_requests_response | null;
}

export interface QUERY_PROJECT_INFORMATION_projectById {
  __typename: "Project";
  id: string;
  title: string;
  description: string | null;
  createdAt: string;
  requests: QUERY_PROJECT_INFORMATION_projectById_requests[];
}

export interface QUERY_PROJECT_INFORMATION {
  projectById: QUERY_PROJECT_INFORMATION_projectById;
}

export interface QUERY_PROJECT_INFORMATIONVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MUTATION_PROJECT_ACCESS
// ====================================================

export interface MUTATION_PROJECT_ACCESS {
  accessProject: string | null;
}

export interface MUTATION_PROJECT_ACCESSVariables {
  id: string;
  access_code: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createTextRequestResponse
// ====================================================

export interface createTextRequestResponse_createTextRequestResponse_text_response {
  __typename: "TextResponse";
  id: string;
  text: string;
}

export interface createTextRequestResponse_createTextRequestResponse {
  __typename: "RequestResponse";
  id: string;
  text_response: createTextRequestResponse_createTextRequestResponse_text_response | null;
}

export interface createTextRequestResponse {
  createTextRequestResponse: createTextRequestResponse_createTextRequestResponse | null;
}

export interface createTextRequestResponseVariables {
  request_id: string;
  text_content: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FileResponseMeta
// ====================================================

export interface FileResponseMeta {
  __typename: "ResponseFile";
  id: string;
  file_name: string;
  aws_file_key: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProjectDetails
// ====================================================

export interface ProjectDetails {
  __typename: "Project";
  id: string;
  title: string;
  description: string | null;
  items_completed: number;
  items_requested: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum RequestTypes {
  FILE_UPLOAD = "FILE_UPLOAD",
  LONG_TEXT = "LONG_TEXT",
  OPTION_SELECT = "OPTION_SELECT",
  SHORT_TEXT = "SHORT_TEXT",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
