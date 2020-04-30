import React, {useEffect, Fragment} from 'react';
import { connect } from 'react-redux';
import * as actionCreator from './../redux/actions/blockactions';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  TableContainer: {
    [theme.breakpoints.down("md")]: {
      maxWidth:"100%"
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth:"100%"
    }

  },
  table: {
    minWidth: 650,
    [theme.breakpoints.down("md")]: {
      maxWidth:"100%"
    }
  },
  listContainer: {
    marginBottom:"30px"
  },
  listText: {
    fontWeight: "700",
    fontSize:"2rem"
  }
}));


function Blocklist({blocks, loadblocks}) {
  const classes = useStyles();
  const theme = useTheme();

    useEffect(() => {
        loadblocks();
       },[])

    return(
      <Fragment>
      <Container maxWidth="md">
      <List className={classes.listContainer}>
        <ListItem>
          <ListItemText className={classes.listText}>List of Blocks for today</ListItemText>
        </ListItem>
        <Divider />
      </List>
      <TableContainer className={classes.TableContainer} component={Paper} variant="outlined" >
      <Table className={classes.table} aria-label="Block List">
        <TableHead>
          <TableRow>
            <TableCell>Height</TableCell>
            <TableCell>Hash</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Main_Chain</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blocks.slice(0,50).map((row) => (
            <TableRow key={row.height}>
              <TableCell>
                {row.height}
              </TableCell>
              <TableCell>{row.hash}</TableCell>
              <TableCell>{Date(row.time)}</TableCell>
              <TableCell>{String(row.main_chain)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Container>

    </Fragment>
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
