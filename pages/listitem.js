import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import MusicIcon from "@material-ui/icons/Headset";
import StockIcon from "@material-ui/icons/TrendingUp";
import ImageIcon from "@material-ui/icons/Image";
import LayersIcon from "@material-ui/icons/Layers";
import TrophyIcon from "@material-ui/icons/EmojiFlags";
import Box from "@material-ui/core/Box";

export const Listitem = (
  <div>
    <Box>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Main" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <MusicIcon />
        </ListItemIcon>
        <ListItemText primary="Music" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <StockIcon />
        </ListItemIcon>
        <ListItemText primary="Stock" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ImageIcon />
        </ListItemIcon>
        <ListItemText primary="Gallery" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <TrophyIcon />
        </ListItemIcon>
        <ListItemText primary="Trophies" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Poker" />
      </ListItem>
    </Box>
  </div>
);
