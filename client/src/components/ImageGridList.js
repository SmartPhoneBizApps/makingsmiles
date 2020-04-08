import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
//import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
//import tileData from './tileData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 750,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     details: 'details',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const tileData = [
   {
       img: "https://www.makingsmiles.co.uk/wp-content/uploads/elementor/thumbs/bigstock-Woman-Wearing-Orthodontic-Sili-111518951-ohcolazjvytuyn8inacy6lpkto1fawa2mze5ner22s.jpg",
       title: 'Invisalign Braces',
       details: 'Invisalign comprises a series of custom-made, almost invisible aligners, produced from a mould of your teeth. Each set is worn on average for two weeks, moving your teeth gradually. They are removeable.',
     },
     {
      img: "https://www.makingsmiles.co.uk/wp-content/uploads/elementor/thumbs/bigstock-Mouth-with-brackets-braces-in-82669277-ohcoob2zpwxu1svi4331ncfl4z8mw377duezu8as78.jpg",
      title: 'Metal Braces',
      details: 'Today’s fixed metal braces are slimline, unobstrusive and very comfortable to wear. They can achieve excellent alignment of teeth in relatively short periods of time: a modern reliable way to improve your smile.',
        },
    {
      img: "https://www.makingsmiles.co.uk/wp-content/uploads/elementor/thumbs/bigstock-Orthodontic-Treatment-Dental-91396139-ohcorc49qp33gkh4fe7rokx21ob7oz82gu3bibt45g.jpg",
      title: 'Ceramic Braces',
      details: 'Tooth-Coloured fixed braces are a more aesthetic way of aligning your teeth. They are strong, yet comfortable and lightweight, and you hardly know they are there. This aesthetic option is a favourite for adults and teenagers alike.',
    },
    {
      img: "https://www.makingsmiles.co.uk/wp-content/uploads/elementor/thumbs/bigstock-Functional-Appliance-Used-For-93370337-ohcovgmrqiqeeyhec6etmjfvwjz7h5lnp961c1owuc.jpg",
      title: 'Functional Braces',
      details: 'A functional appliance is a removable brace that works on the upper and lower teeth at the same time. It alter the posture of the andible lower jaw and transmit the forces created by the resulting stretch of the muscles.',
    },
    {
      img: "https://www.makingsmiles.co.uk/wp-content/uploads/elementor/thumbs/bigstock-Portrait-of-a-little-girl-with-104248085-ohcoylfein0t45xk1j61xqz76sj94u1g4rgax91o3o.jpg",
      title: 'Interceptive Braces',
      details: 'Interceptive orthodontics is also known as early orthodontics and is recommended to correct certain dental malocclusions. Interceptive care can help make future orthodontic care less involved requiring less treatment time',
    },
    {
      img: "https://www.makingsmiles.co.uk/wp-content/uploads/elementor/thumbs/bigstock-invisible-lingual-braces-on-de-51233977-ohcp4qbh4pf6wj0p7ondpp8iscaidpedb4rep9y5hg.jpg",
      title: 'Lingual Braces',
      details: 'Custom-made of gold, Lingual braces are fixed to the back of your teeth so they are invisible. They are easily tolerated, very effective and teeth are less prone to damage from decalcification and decay.',
    },
   ];

function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.details}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default ImageGridList