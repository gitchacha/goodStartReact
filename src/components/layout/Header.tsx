import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

interface HeaderProps {
  theme?: string
}

export default function Header({
  theme = 'theme-one',
}: PropsWithChildren<HeaderProps>) {
  return (
    <HeaderWrap theme={theme}>
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
    </HeaderWrap>
  )
}

const HeaderWrap = styled.div<{ theme?: string }>`
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  background: #002060;
  z-index: 110;

  ${({ theme }) => {
    return css`
      background: #bf0072;
    `
  }}

  .btn-navi {
    width: 55px;
    height: 55px;
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
    font-size: 20px;
  }

  .btn-src {
    width: 55px;
    height: 55px;
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
    font-size: 20px;
  }
  .co-tit {
    height: 55px;
    line-height: 60px;
    padding: 0 55px; /*position: absolute; top: 0; bottom: 0; left: 60px; right: 60px;*/
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.7rem;
    text-align: center;
    color: #fff;
    font-weight: bold;
    box-sizing: border-box;
  }
  .co-tit .small {
    font-size: 15px;
  }
  .co-img {
    text-align: center;
  }
  .co-img span {
    display: inline-block;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #df1b51;
    margin-top: 12px;
  }
  .co-img span img {
    width: 100%;
  }
  .search-btn {
    position: absolute;
    right: 15px;
    top: 9px;
    font-size: 21px;
    color: #cacacb;
  }
  .chat-btn {
    position: absolute;
    right: 15px;
    top: 10px;
    font-size: 21px;
    color: #cacacb;
    line-height: 100%;
  }
  .settings-btn {
    position: absolute;
    right: 15px;
    top: 11px;
    font-size: 21px;
    color: #cacacb;
    display: inline-block;
  }
  .check-btn {
    position: absolute;
    right: 15px;
    top: 10px;
    font-size: 22px;
    color: #606679;
    width: 21px;
    height: 21px;
    display: inline-block;
  }
  .check-btn.on {
    color: #df1b51;
  }

  // TODO: THEME 처리 추가
  .theme-one .mo-wrap .header {
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    background: #bf0072;
    z-index: 110;
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
