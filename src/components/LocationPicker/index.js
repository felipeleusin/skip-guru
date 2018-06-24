import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import { Card, Label, Input, Box } from 'rebass/emotion'
import styled from 'react-emotion'

import Suggestions from './Suggestions'

const itemToString = item => (item ? item.description : '')

export default class PersonPicker extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Downshift onChange={this.props.onChange} itemToString={itemToString}>
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          selectedItem,
          highlightedIndex,
        }) => (
          <div>
            <Label {...getLabelProps()}>Where are you?</Label>
            <Input {...getInputProps()} onFocus={this.handleInputFocus} />
            <div
              {...getMenuProps()}
              css={{ display: isOpen ? 'block' : 'none', maxHeight: '200px', overflowY: 'scroll' }}
            >
              <Suggestions search={inputValue}>
                {({ items }) => (
                  <Card p={0} mt={1} mr={3}>
                    {items.map((item, i) => (
                      <Box
                        key={item.id}
                        {...getItemProps({ item })}
                        p={2}
                        bg={i === highlightedIndex ? 'lightRed' : 'white'}
                      >
                        {item.description}
                      </Box>
                    ))}
                  </Card>
                )}
              </Suggestions>
            </div>
          </div>
        )}
      </Downshift>
    )
  }
}
