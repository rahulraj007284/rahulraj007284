import React from 'react';
import PropTypes from 'prop-types';
import { LineChart as PfLineChart } from 'patternfly-react';

import { translate as __ } from '../../../../../react_app/common/I18n';
import { getLineChartConfig } from '../../../../../services/charts/LineChartService';

import MessageBox from '../../MessageBox';

/* Data format example:
  data={[
      ['red', [5, 7, 9], '#AA4643'],
      ['green', [2, 4, 6], '#89A54E'],
      ['x', [1557014400000, 1559779200000, 1562457600000], null],
    ]}
*/
const LineChart = ({
  data,
  title,
  config,
  noDataMsg,
  unloadData,
  xAxisDataLabel,
  axisOpts,
  onclick,
  id,
}) => {
  const chartConfig = getLineChartConfig({
    data,
    config,
    xAxisDataLabel,
    axisOpts,
    onclick,
    id,
  });

  if (chartConfig.data.columns.length > 0) {
    return (
      <PfLineChart
        {...chartConfig}
        title={title}
        unloadBeforeLoad={unloadData}
      />
    );
  }
  return <MessageBox msg={noDataMsg} icontype="info" />;
};

LineChart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  config: PropTypes.oneOf(['regular', 'timeseries']),
  noDataMsg: PropTypes.string,
  title: PropTypes.object,
  unloadData: PropTypes.bool,
  axisOpts: PropTypes.object,
  xAxisDataLabel: PropTypes.string,
  onclick: PropTypes.func,
  id: PropTypes.string,
};

LineChart.defaultProps = {
  data: undefined,
  config: 'regular',
  noDataMsg: __('No data available'),
  title: { type: 'percent' },
  unloadData: false,
  axisOpts: {},
  xAxisDataLabel: '',
  onclick: () => {},
  id: undefined,
};

export default LineChart;
