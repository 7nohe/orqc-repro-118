// generated with @7nohe/openapi-react-query-codegen@1.4.0 

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { DefaultService } from "../requests/services.gen";
import * as Common from "./common";
/**
* @returns ApiResponseList_Project_ Ok
* @throws ApiError
*/
export const useDefaultServiceGetProjectsSuspense = <TData = Common.DefaultServiceGetProjectsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDefaultServiceGetProjectsKeyFn(queryKey), queryFn: () => DefaultService.getProjects() as TData, ...options });
