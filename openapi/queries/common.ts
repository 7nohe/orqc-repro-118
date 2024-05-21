// generated with @7nohe/openapi-react-query-codegen@1.4.0 

import { UseQueryResult } from "@tanstack/react-query";
import { DefaultService } from "../requests/services.gen";
export type DefaultServiceGetProjectsDefaultResponse = Awaited<ReturnType<typeof DefaultService.getProjects>>;
export type DefaultServiceGetProjectsQueryResult<TData = DefaultServiceGetProjectsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDefaultServiceGetProjectsKey = "DefaultServiceGetProjects";
export const UseDefaultServiceGetProjectsKeyFn = (queryKey?: Array<unknown>) => [useDefaultServiceGetProjectsKey, ...(queryKey ?? [])];
export type DefaultServiceCreateProjectMutationResult = Awaited<ReturnType<typeof DefaultService.createProject>>;
