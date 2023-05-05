
// import {
//     ResponseInData,
//     ResponseInRows,
//     ResponseWithCode
//   } from '../helpers/typesHelpers';
//   import {
//     IStopsPayload,
//     IStops,
//     StopsFilter,
//     IStopsTypes
//   } from '../interfaces/Stops';
import { apiClient } from './base';

const apiMethods = {
    // getAvatar: (params) => apiClient.get('/avatar', { params }),
    createAvatar: (body) => apiClient.post('/avatars', body),
    // uploadStops: (csv: FormData) =>
    //   apiClient.post<ResponseInData<number>>('files/uploadFile', csv),
    // updateStop: (id: number | undefined, body: IStopsPayload) =>
    //   apiClient.put<ResponseWithCode>(`stop_codes/one/${id}`, body),
    // deleteStop: (id: number | undefined) =>
    //   apiClient.delete('stop_codes/one/' + id),
    // getStopsTypes: () => apiClient.get<IStopsTypes[]>('/stop_code_types/all')
};

export default apiMethods