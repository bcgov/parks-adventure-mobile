import React from 'react'

import Leaf from './leaf.svg'
import PineTree from './pine-tree.svg'
import Shield from './shield-sun.svg'
import TreeFrog from './tree-frog.svg'
import Van from './van.svg'

export function getParkTypeIcon(type) {
  switch (type) {
    case 'PK':
      return <PineTree accessibilityLabel={'Provincial Park'} />
    case 'RA':
      return <Van accessibilityLabel={'Recreation Area'} />
    case 'ER':
      return <Leaf accessibilityLabel={'Ecological Reserve'} />
    case 'CS':
      return (
        <TreeFrog height={26} width={26} accessibilityLabel={'Conservancy'} />
      )
    case 'PA':
      return <Shield accessibilityLabel={'Protected Area'} />
  }
}
