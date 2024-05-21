// generated with @7nohe/openapi-react-query-codegen@1.4.0 

import { type QueryClient } from "@tanstack/react-query";
import { DefaultService } from "../requests/services.gen";
import * as Common from "./common";
/**
* @returns ApiResponseList_Project_ Ok
* @throws ApiError
*/
export const prefetchUseDefaultServiceGetProjects = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: [Common.useDefaultServiceGetProjectsKey, []], queryFn: () => DefaultService.getProjects() });
