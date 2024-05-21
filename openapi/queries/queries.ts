// generated with @7nohe/openapi-react-query-codegen@1.4.0 

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { DefaultService } from "../requests/services.gen";
import { ProjectCreateParams } from "../requests/types.gen";
import * as Common from "./common";
/**
* @returns ApiResponseList_Project_ Ok
* @throws ApiError
*/
export const useDefaultServiceGetProjects = <TData = Common.DefaultServiceGetProjectsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDefaultServiceGetProjectsKeyFn(queryKey), queryFn: () => DefaultService.getProjects() as TData, ...options });
/**
* @param data The data for the request.
* @param data.requestBody
* @returns ApiResponse_Project_ Created
* @throws ApiError
*/
export const useDefaultServiceCreateProject = <TData = Common.DefaultServiceCreateProjectMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ProjectCreateParams;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ProjectCreateParams;
}, TContext>({ mutationFn: ({ requestBody }) => DefaultService.createProject({ requestBody }) as unknown as Promise<TData>, ...options });
