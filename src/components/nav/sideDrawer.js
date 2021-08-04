import { useState } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
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
      />
      <Drawer anchor={'right'} open={state} onClose={() => setState(false)}>
        <List>
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
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary='Education' />
          </ListItem>

          <ListItem
            button
            component={RouterLink}
            to='/projects'
            onClick={() => setState(false)}>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary='Projects' />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default SideDrawer;
