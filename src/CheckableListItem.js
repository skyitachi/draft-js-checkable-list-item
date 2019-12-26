/* @flow */

import React, { Component } from 'react'
import { EditorBlock, SelectionState, ContentState, ContentBlock } from 'draft-js'
import type { DraftDecoratorType } from 'draft-js/lib/DraftDecoratorType'
import type { List } from 'immutable'
import type { BidiDirection } from 'fbjs/lib/UnicodeBidiDirection'

type BlockProps = {
  onChangeChecked: () => void,
  checked: boolean,
}

type Props = {
  contentState: ContentState,
  block: ContentBlock,
  customStyleMap: Object,
  customStyleFn: Function,
  tree: List<any>,
  selection: SelectionState,
  decorator: DraftDecoratorType,
  forceSelection: boolean,
  direction: BidiDirection,
  blockStyleFn: Function,
  offsetKey: string,
  blockProps: BlockProps,
}

export default class CheckableListItem extends Component<Props> {
  render() {
    const { offsetKey, blockProps: { onChangeChecked, checked } } = this.props
    return (
      <div
        className={`checkable-list-item-block${checked ? ' is-checked' : ''}`}
        data-offset-key={offsetKey}
      >
        <div
          className='checkable-list-item-block__checkbox'
          contentEditable={false}
          suppressContentEditableWarning
        >
          <div className='checkable-list-item-block__wrapper'>
            <input type='checkbox' checked={checked} onChange={onChangeChecked} />
          </div>
        </div>
        <div className='checkable-list-item-block__text'>
          <EditorBlock {...this.props} />
        </div>
      </div>
    )
  }
}
