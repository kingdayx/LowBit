import { connect } from 'react-redux';
import App from '../components/App';
import {
  addAction,
  subAction
} from '../actions/counterActions';
import { healthAction } from '../actions/healthActions';
import { 
  simpleTokenNameAction, 
  simpleTokenSymbolAction,
  simpleTokenDecimalsAction,
} from '../actions/simpleTokenActions';
import { 
  warningOpenAction,
  warningCloseAction
} from '../actions/warningActions';
import {
  metaMaskAccountAction,
  metaMaskNetworkAction
} from '../actions/metaMaskActions';
import {
  LOLYATNameAction,
  LOLYATSymbolAction,
  LOLYATGetOwnedTokensAction,
  LOLYATTokenURIAction
} from '../actions/LOLYATActions';

const  mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  count: state.count,
  error: state.error,
  health: state.health,
  simpleToken: state.simpleToken,
  warning: state.warning,
  metaMask: state.metaMask,
  LOLYATToken: state.LOLYATToken,
  LOLYATOwned: state.LOLYATOwned,
  LOLYATOwnedTokenURI: state.LOLYATOwnedTokenURI
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd: (num) => {
      dispatch(addAction(num));
    },
    handleSub: (num) => {
      dispatch(subAction(num));
    },
    handleHealth: () => {
      dispatch(healthAction());
    },
    handleSimpleTokenName: (networkId) => {
      dispatch(simpleTokenNameAction(networkId));
    },
    handleSimpleTokenSymbol: (networkId) => {
      dispatch(simpleTokenSymbolAction(networkId));
    },
    handleSimpleTokenDecimals: (networkId) => {
      dispatch(simpleTokenDecimalsAction(networkId));
    },
    handleLOLYATName: (networkId) => {
      dispatch(LOLYATNameAction(networkId));
    },
    handleLOLYATSymbol: (networkId) => {
      dispatch(LOLYATSymbolAction(networkId));
    },
    handleLOLYATGetOwnedTokens: (networkId, address, callBack) => {
      dispatch(LOLYATGetOwnedTokensAction(networkId, address, callBack));
    },
    handleLOLYATTokenURI: (networkId, tokenId, callBack) => {
      dispatch(LOLYATTokenURIAction(networkId, tokenId, callBack));
    },
    handleWarningOpen: (message) => {
      dispatch(warningOpenAction(message));
    },
    handleWarningClose: () => {
      dispatch(warningCloseAction());
    },
    handleMetaMaskAccount: (account) => {
      dispatch(metaMaskAccountAction(account));
    },
    handleMetaMaskNetwork: (network) => {
      dispatch(metaMaskNetworkAction(network));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);