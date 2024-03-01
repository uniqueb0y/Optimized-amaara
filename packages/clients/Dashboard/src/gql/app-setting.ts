import { gql } from "@apollo/client";

export const UPDATE_APP_SETTING = gql`
    mutation UpdateAppSetting($appSettingInput: AppSettingInput!) {
        updateAppSetting(appSettingInput: $appSettingInput) {
            id
        }
    }
`;