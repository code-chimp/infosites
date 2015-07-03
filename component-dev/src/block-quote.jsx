import React from 'react/addons';
import assign from 'object-assign';
import Base from './base';
import Radium from 'radium';

@Radium
class BlockQuote extends Base {
  render() {
    return (
      <blockquote style={[this.context.styles.components.blockquote, this.getStyles()]}>
        {this.props.children}
      </blockquote>
    )
  }
}

BlockQuote.contextTypes = {
  styles: React.PropTypes.object
}

export default BlockQuote;