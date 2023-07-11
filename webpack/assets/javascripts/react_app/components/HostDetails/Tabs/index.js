import React from 'react';
import { translate as __ } from '../../../common/I18n';
import { addGlobalFill } from '../../common/Fill/GlobalFill';
import { DEFAULT_TAB, TABS_SLOT_ID } from '../consts';
import OverviewTab from './Overview';
import DetailTab from './Details';
import ReportsTab from './ReportsTab';
import ParametersTab from './Parameters';

export const registerCoreTabs = () => {
  addGlobalFill(
    TABS_SLOT_ID,
    DEFAULT_TAB,
    <OverviewTab key="host-details-overview-tab" />,
    5000,
    { title: __('Overview') }
  );
  addGlobalFill(
    TABS_SLOT_ID,
    'Details',
    <DetailTab key="host-details-detail-tab" />,
    4000,
    { title: __('Details') }
  );
  addGlobalFill(
    TABS_SLOT_ID,
    'Reports',
    <ReportsTab key="host-details-reports-tab" />,
    477,
    {
      title: __('Reports'),
    }
  );
  addGlobalFill(
    TABS_SLOT_ID,
    'Parameters',
    <ParametersTab key="host-details-parameters-tab" />,
    850,
    {
      title: __('Parameters'),
    }
  );
};
