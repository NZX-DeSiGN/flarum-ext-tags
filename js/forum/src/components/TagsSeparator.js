import Component from 'flarum/Component';

/**
 * The `TagsSeparator` component defines a menu separator item.
 */
class TagsSeparator extends Component {
  view() {
    return (
        <li class="item-tags"><a class="hasIcon" title="Tags" href="/tags" active="false"><i class="icon fa fa-tags Button-icon"></i><span class="Button-label">Tags</span></a></li>
    );
  }
}

TagsSeparator.isListItem = true;

export default TagsSeparator;
