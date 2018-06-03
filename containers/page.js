import React from 'react';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic';
import { is } from 'immutable';

import { color } from '../constants/style';
import { allDescriptionType } from '../constants/olaf';
import { selectDescription, requestInit } from '../redux/actions/olaf';

const Scene = dynamic(import('../components/scene'), {
  ssr: false,
  loading: () => false
});

class Page extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (is(nextProps.receiveData, this.props.receiveData)) {
      console.log('false');
      return false;
    }
    return true;
  }

  changeDescription = (index) => {
    this.props.dispatch(selectDescription(allDescriptionType[index])); // 测试性能优化
    this.props.dispatch(requestInit(allDescriptionType[index]));
  }

  render() {
    const { receiveData } = this.props;
    return (
      <div className="main">
        <Scene/>
        <div className="content">
          <div className="center">
            <img className="logo" src="/static/cdn/img/logo.png" />
            <h2>{receiveData.get('description')}</h2>
            <div className="btn-group">
              <a className="btn btn-lg btn-white" onClick={() => this.changeDescription(0)}>description one</a>
              <a className="btn btn-lg btn-filled" onClick={() => this.changeDescription(1)}>description two</a>
            </div>
          </div>
        </div>
        {/* language=LESS */}
        <style jsx>{`
          .main {
            position: relative;
            width: 100vw;
            height: 100vh;
            .content {
              background: rgba(0, 0, 0, 0.6);
              position: relative;
              z-index: 3;
              width: 100vw;
              height: 100vh;
              .center {
                height: 90vh;
                lost-offset: 1/6;
                lost-column: 4/6;
                text-align: center;
                .logo {
                  width: 438px;
                  height: 512px;
                }
                h2 {
                  color: #fff;
                  font-size: 40px;
                  lost-row: 1/6;
                }
                .btn-group {
                  lost-row: 1/6;
                  .btn {
                    font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
                    border: 2px solid ${color.blue};
                    padding: 0 26px;
                    min-width: 150px;
                    line-height: 36px;
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    border-radius: 0;
                    color: ${color.blue};
                    text-align: center;
                    transition: all 0.3s ease;
                    white-space: normal;
                    cursor: pointer;
                  }
                  .btn-lg {
                    line-height: 24px;
                    min-width: 200px;
                    padding-bottom: 13px;
                    padding-top: 13px;
                    box-sizing: border-box;
                    margin: 0 24px;
                  }
                  .btn-white {
                    color: #fff;
                    border-color: #fff;
                    &:hover {
                      background: #fff;
                      border-color: #fff;
                      color: #222;
                    }
                  }
                  .btn-filled {
                    background: ${color.blue};
                    color: #fff;
                    border-color: ${color.blue};
                    &:hover {
                      background: ${color.blueActive};
                      border-color: ${color.blueActive};
                      color: #fff;
                    }
                  }
                }
              }
            }
          }
        `}</style>
      </div>
    );
  }
}

export default connect(state => state)(Page);
