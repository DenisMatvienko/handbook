/**
 *   - Use Firs name of profile;
 *     This selector create for using Profile data's in components, returns from backend;
 *     Data's was returns in fetchProfileData, and get in ProfileSlice in extraReducers;
 *
 *   @notice state.data-field
 *    - 'data' field is optional field (not necessary). When try to apply this field and get
 *      some subfield (exc. data.firstName) - ts didn't react on this.
 *      May be situation when data will - undefined. And in this situation we are try get
 *      field from undefined. In this case app crash with error. Tht about strict mode
 */
import { StateSchema } from 'app/provider/StoreProvider';

export const getProfileData = (state: StateSchema) => state.profile?.data;
