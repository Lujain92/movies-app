/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import Container from 'components/SearchAllAvailableInput/styles';
import PropTypes from 'prop-types';
import { Text } from 'components/shared-styled-comp/shared-styled-comp';

/**
 * Functional component for searching and filtering by availability options.
 *
 * @param {Object} props - The component's properties.
 * @param {Function} props.setAvailabilities - Function to set availabilities.
 * @param {Array} props.availabilities - Array of availabilities.
 */
export default function SearchAllAvailableInput({
  setAvailabilities,
  availabilities,
}) {
  const [searchAllActive, setSearchAllActive] = useState(true);
  const availableArr = ['flatrate', 'free', 'ads', 'rent', 'buy'];

  /**
   * Handles the change of availabilities selection.
   * @function
   * @param {Object} e - Event object.
   */
  const changeAvailabilities = (e) => {
    if (availabilities.includes(e.target.value)) {
      setAvailabilities((prev) =>
        prev.filter((availability) => availability !== e.target.value),
      );
    } else {
      setAvailabilities((prev) => [...prev, e.target.value]);
    }
  };

  /**
   * Handles availability search option change.
   * @function
   * @param {Object} e - Event object.
   */
  const searchAllActiveHandler = (e) => {
    setSearchAllActive(!searchAllActive);
    if (e.target.value) {
      setAvailabilities([]);
    }
  };

  return (
    <>
      <Text> Availabilities </Text>
      <input
        type="checkbox"
        id="all"
        name="all"
        value="all"
        data-testid="all"
        defaultChecked={searchAllActive}
        onChange={searchAllActiveHandler}
      />

      <label htmlFor="all" key="all-checkbox-label">
        Search all availabilities?
      </label>
      {!searchAllActive && (
        <Container>
          {availableArr.map((opt) => (
            <label htmlFor={opt} key={opt}>
              <input
                type="checkbox"
                id={opt}
                name={opt}
                value={opt}
                onChange={changeAvailabilities}
                data-testid={`checkbox-${opt}`}
                key={`checkbox-${opt}`}
              />
              {opt}
            </label>
          ))}
        </Container>
      )}
    </>
  );
}

SearchAllAvailableInput.propTypes = {
  setAvailabilities: PropTypes.func,
  availabilities: PropTypes.arrayOf(PropTypes.string),
};

SearchAllAvailableInput.defaultProps = {
  setAvailabilities: () => {},
  availabilities: [],
};
