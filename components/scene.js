import React from 'react';
import Parallax from 'parallax-js';
import { Bind, Debounce } from 'lodash-decorators';
import $ from 'jquery';

export default class Scene extends React.PureComponent {
  componentDidMount() {
    this.initParallax();
    window.addEventListener('resize', this.resize);
  }

  initParallax() {
    const scene = document.getElementById('scene');
    $('#scene').css({
      width: $(window).outerWidth() + 120,
      position: 'absolute',
      'margin-left': -60,
      'margin-top': -60
    });
    $('#scene').children().each((index) => {
      $('#scene').eq(index).css({
        height: $(window).outerHeight() + 100
      });
    });
    this.parallaxInstance = new Parallax(scene);
  }

  @Bind()
  @Debounce(500)
  resize() {
    this.initParallax();
  }

  render() {
    return (
      <div>
        <ul id="scene">
          <li className="layer" data-depth="0.10"></li>
          <li className="layer" data-depth="0.20"></li>
        </ul>
        {/* language=LESS */}
        <style jsx>{`
          ul {
            li:nth-child(1) {
              background-image: url('/static/cdn/img/back.png');
            }
            li:nth-child(2) {
              background-image: url('/static/cdn/img/front.png');
            }
            .layer {
              width: 100%;
              height: 100%;
              background-position: top center;
              background-size: cover;
            }
          }
        `}</style>
      </div>
    );
  }
}
