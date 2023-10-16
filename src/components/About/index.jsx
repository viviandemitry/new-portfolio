import React from 'react'
import * as Styles from './styles';

import { useSelector} from 'react-redux';

export default function About() {

  const isTransformed = useSelector((state) => state.isTransformed);

  console.log(isTransformed);
    return (
      <Styles.Container>

      </Styles.Container>
    )
  }