import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../../history';
import hosts from './hosts';
import notifications from './notifications';
import { reducers as passwordStrengthReducers } from '../../components/PasswordStrength';
import { reducers as breadcrumbBarReducers } from '../../components/BreadcrumbBar';
import { reducers as layoutReducers } from '../../components/Layout';
import { reducers as diffModalReducers } from '../../components/ConfigReports/DiffModal';
import { reducers as editorReducers } from '../../components/Editor';
import { reducers as templateGenerationReducers } from '../../components/TemplateGenerator';
import { reducers as fillReducers } from '../../components/common/Fill';
import { reducers as typeAheadSelectReducers } from '../../components/common/TypeAheadSelect';
import { reducers as auditsPageReducers } from '../../routes/Audits/AuditsPage';
import { reducers as intervalReducers } from '../middlewares/IntervalMiddleware';
import { reducers as bookmarksPF4Reducers } from '../../components/PF4/Bookmarks';
import { reducers as modalReducers } from '../../components/ForemanModal';
import { reducers as apiReducer } from '../API';
import { reducers as modelsPageReducers } from '../../routes/Models/ModelsPage';
import { reducers as settingRecordsReducers } from '../../components/SettingRecords';
import { reducers as personalAccessTokensReducers } from '../../components/users/PersonalAccessTokens';
import { reducers as confirmModalReducers } from '../../components/ConfirmModal';
import { reducers as toastsListReducers } from '../../components/ToastsList';

export function combineReducersAsync(asyncReducers) {
  return combineReducers({
    ...bookmarksPF4Reducers,
    hosts,
    notifications,
    ...toastsListReducers,
    ...passwordStrengthReducers,
    ...breadcrumbBarReducers,
    ...layoutReducers,
    ...asyncReducers,
    ...diffModalReducers,
    ...editorReducers,
    ...templateGenerationReducers,
    ...typeAheadSelectReducers,
    ...settingRecordsReducers,
    ...personalAccessTokensReducers,
    ...confirmModalReducers,

    router: connectRouter(history),
    // Pages
    ...fillReducers,
    ...auditsPageReducers,
    ...modalReducers,
    ...modelsPageReducers,

    // Middlewares
    ...intervalReducers,
    ...apiReducer,
  });
}

export default combineReducersAsync();
