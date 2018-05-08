import * as React from 'react';
import styles from './ReactJest.module.scss';
import { IReactJestProps } from './IReactJestProps';

export default class ReactJest extends React.Component<IReactJestProps, {}> {
  
  public componentDidMount(): void {
    if(this.props.description === 'desc'){
      console.log('ok1');
    } else {
      console.log('never going to be hit');
    }
  }
  public render(): React.ReactElement<IReactJestProps> {
    return (
      <div id='iceCreamComponent' className={ styles.button }>
        WORKS!
      </div>
    );
  }
}
