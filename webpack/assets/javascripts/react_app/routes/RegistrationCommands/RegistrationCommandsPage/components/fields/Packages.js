/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup, TextInput } from '@patternfly/react-core';
import LabelIcon from '../../../../../components/common/LabelIcon';

import { sprintf, translate as __ } from '../../../../../common/I18n';

const Packages = ({ packages, handlePackages, configParams, isLoading }) => (
  <FormGroup
    label={__('Install packages')}
    helperText={
      configParams?.host_packages &&
      sprintf('Default value: "%s"', configParams?.host_packages)
    }
    labelIcon={
      <LabelIcon
        text={__(
          'Packages to install on the host when registered. Can be set by `host_packages` parameter, example: `pkg1 pkg2`.'
        )}
      />
    }
    fieldId="reg_packages"
  >
    <TextInput
      ouiaId="reg_packages"
      id="reg_packages"
      value={packages}
      type="text"
      onChange={handlePackages}
      isDisabled={isLoading}
    />
  </FormGroup>
);

Packages.propTypes = {
  configParams: PropTypes.object,
  packages: PropTypes.string,
  handlePackages: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

Packages.defaultProps = {
  packages: '',
  configParams: {},
};

export default Packages;
