# React PropTypes
```
import React from 'react';
import PropTypes from 'prop-types';

const Person = (props) => <div>
  <h1>{props.firstName} {props.lastName}</h1>
  {props.country ? <p>Country: {props.country}</p> : null}
</div>;
Person.propTypes = {
  firstName:PropTypes.string,
  lastName:PropTypes.string,
  country:PropTypes.string
};
export default Person;
```

Install syntax
```
npm install --save prop-types
```

## Basic Type
- PropTypes.any
- PropTypes.bool
- PropTypes.number
- PropTypes.string
- PropTypes.func
- PropTypes.array
- PropTypes.object
- PropTypes.symbol