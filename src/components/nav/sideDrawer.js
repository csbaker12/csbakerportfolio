import { useState } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SchoolIcon from '@material-ui/icons/School';
import FolderIcon from '@material-ui/icons/Folder';
import { Link as RouterLink } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

const SideDrawer = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <DehazeIcon
        onClick={() => setState(true)}
        style={{ fontSize: '40px', color: 'white' }}
        className='drawer_btn'
      />
      <Drawer anchor={'right'} open={state} onClose={() => setState(false)}>
        <List className='drawer'>
          {/* <ListItem
            button
            component={RouterLink}
            to='/connect'
            onClick={() => setState(false)}>
            <ListItemIcon>
              <MailOutlineIcon />
            </ListItemIcon>
            <ListItemText primary='Connect' />
          </ListItem> */}

          <ListItem
            button
            component={RouterLink}
            to='/education'
            onClick={() => setState(false)}>
            <ListItemIcon>
              <SchoolIcon style={{ fontSize: '40px', color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary='Education' className='item' />
          </ListItem>

          <ListItem
            button
            component={RouterLink}
            to='/projects'
            onClick={() => setState(false)}>
            <ListItemIcon>
              <FolderIcon style={{ fontSize: '40px', color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary='Projects' className='item' />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default SideDrawer;
