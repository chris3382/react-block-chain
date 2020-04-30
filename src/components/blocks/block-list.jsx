import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import * as actionCreator from './../redux/actions/blockactions';


function Blocklist({blocks, loadblocks}) {

    useEffect(() => {
        loadblocks();
       },[])

    return(
        <div>
            <ul>
            {
                blocks.length > 0 &&
                blocks.map(block => <li key={block.height}>{block.height}</li>)
            }
            </ul>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        blocks: state.blocksReducer.blocks
    }
}
const mapDispatchToProps = dispatch => {
    return {
      loadblocks:() => dispatch(actionCreator.loadBlocklist())
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Blocklist);
