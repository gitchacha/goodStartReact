import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

import Header from './Header'

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Wrap>
      <Header>
        <button className="btn-navi">
          <span className="icon-btn_navi"></span>
        </button>
        <h1 className="logo" style={{ display: 'none' }}>
          IBIS PLUS
        </h1>
        <h2 className="co-tit">My Service &amp; Vessel</h2>

        <button className="btn-src">
          <span className="icon-ico_src"></span>
        </button>

        <div css={styles.topBoxSrc} style={{ display: 'none' }}>
          <div className="src">
            <input
              type="text"
              name="kw"
              id="kw"
              placeholder="service, vessel, port"
              autoFocus
              className="ui-autocomplete-input"
              autoComplete="off"
            />
            <input type="hidden" name="kw_src" id="kw_src" />
            <input type="hidden" name="kw_cd" id="kw_cd" />
            <button
              type="button"
              name="btn_keyword_delete"
              id="btn_keyword_delete"
              className="icon-btn_close"
              style={{
                position: 'absolute',
                right: 25,
                top: 16,
                fontSize: 10,
              }}
            ></button>
          </div>
        </div>
      </Header>
      <Contents>{children}</Contents>
    </Wrap>
  )
}

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 55px;

  .mg-t10 {
    margin-top: 10px !important;
  }
  .mg-t20 {
    margin-top: 20px !important;
  }
  .mg-t30 {
    margin-top: 30px !important;
  }
  .mg-t40 {
    margin-top: 40px !important;
  }
  .mg-t50 {
    margin-top: 50px !important;
  }
`
const styles = {
  topBoxSrc: css`
    position: relative;
    height: 50px;
    padding: 5px 18px;
    font-size: 1.3rem;

    input[type='text'] {
      width: 100%;
      padding: 5px 15px;
      border: 0;
      font-size: 1.3rem;
      color: #333;
    }
    .icon-ico_src {
      width: 20px;
      color: #999;
    }
  `,
  keywordResult: css`
    z-index: 200;
    padding: 5px 0;
    border: 1px solid #242c4b;
    border-radius: 3px;
    color: #666;
    background-color: #fff;

    li {
      position: relative;

      &:before {
        content: '';
        display: block;
        width: 30px;
        height: 23px;
        position: absolute;
        top: 0;
        left: 0;
        background: url(../../images/default/split_ico_keyword.png) no-repeat;
      }

      a {
        padding: 2px 13px 3px 36px !important;
      }
    }

    li li {
      background-color: transparent !important;
      a {
        padding-left: 56px;
      }
    }

    li li:before {
      left: 20px;
    }
    li.prt:before {
      background-position: -180px 0;
    }
    li.svc:before {
      background-position: -30px 0;
    }
    li.vsl:before {
      background-position: -60px 0;
    }
    li.vsl-lib:before {
      background-position: -120px 0;
    }
    li.svc-lib:before {
      background-position: -90px 0;
    }
    li.prt-lib:before {
      background-position: -150px 0;
    }
    li span {
      display: block;
    }
    li .menu {
      font-size: 11px;
      color: #999;
    }
  `,
}

const Contents = styled.div`
  position: relative;
  height: 100%;
`
