'use client';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Avatar,
  Box,
  Container,
  Paper,
  IconButton,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { styled } from '@mui/material/styles';

// Styled search component
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid #e2e8f0',
  backgroundColor: theme.palette.background.paper,
  marginLeft: theme.spacing(2),
  width: '100%',
  maxWidth: '400px',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    border: `1px solid ${theme.palette.primary.main}`,
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right: 0,
  top: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 4, 1.5, 2),
  },
}));

// Sample data with more reliable image sources
const articles = [
  {
    id: 1,
    title: "The Future of AI in Healthcare",
    excerpt: "Exploring how artificial intelligence is revolutionizing medical diagnosis and treatment...",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&h=200",
    category: "Healthcare",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Sustainable Energy Solutions",
    excerpt: "Innovative approaches to renewable energy sources and their implementation...",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=400&h=200",
    category: "Environment",
    readTime: "4 min read"
  },
];

const trending = [
  {
    id: 1,
    title: "Web3 Development Trends",
    views: "2.1k views",
    avatar: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=40&h=40"
  },
  {
    id: 2,
    title: "Machine Learning Basics",
    views: "1.8k views",
    avatar: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=40&h=40"
  },
  {
    id: 3,
    title: "Cloud Computing Guide",
    views: "1.5k views",
    avatar: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=40&h=40"
  },
];

// Image error handler component
const ImageWithFallback = ({ src, alt, ...props }) => {
  const handleError = (e) => {
    e.target.src = 'https://via.placeholder.com/400x200/13131A/FFFFFF?text=TechInsights';
  };

  return (
    <CardMedia
      component="img"
      src={src}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
};

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Header */}
      <AppBar position="static" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Brand Name */}
            <Typography 
              variant="h6" 
              color="inherit" 
              sx={{ 
                flexShrink: 0,
                fontSize: { xs: '1.1rem', sm: '1.25rem' }
              }}
            >
              TechInsights
            </Typography>

            {/* Search Bar */}
            <Search>
              <StyledInputBase
                placeholder="Search articles..."
                inputProps={{ 'aria-label': 'search' }}
              />
              <SearchIconWrapper>
                <IconButton size="small" sx={{ color: 'inherit' }}>
                  <SearchIcon />
                </IconButton>
              </SearchIconWrapper>
            </Search>

            {/* Profile */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar sx={{ width: { xs: 32, sm: 40 }, height: { xs: 32, sm: 40 } }}>J</Avatar>
              <Typography 
                color="inherit" 
                sx={{ 
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                Akshay Mathad
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ flexGrow: 1, py: 4 }}>
        <Grid container spacing={4}>
          {/* Left Column - Articles */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {articles.map((article) => (
                <Grid item xs={12} key={article.id}>
                  <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
                    <ImageWithFallback
                      sx={{ 
                        width: { xs: '100%', sm: 240 },
                        height: { xs: 200, sm: 240 },
                        objectFit: 'cover'
                      }}
                      image={article.image}
                      alt={article.title}
                    />
                    <CardContent sx={{ flex: 1, p: 3 }}>
                      <Box sx={{ mb: 2 }}>
                        <Chip 
                          label={article.category} 
                          size="small"
                        />
                        <Typography 
                          variant="caption" 
                          color="text.secondary"
                          sx={{ ml: 1 }}
                        >
                          {article.readTime}
                        </Typography>
                      </Box>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                        {article.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {article.excerpt}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          
          {/* Right Column - Trending */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUpIcon sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h6" color="text.primary">
                  Trending Now
                </Typography>
              </Box>
              <List>
                {trending.map((item, index) => (
                  <Box key={item.id}>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemAvatar>
                        <Avatar 
                          src={item.avatar}
                          imgProps={{
                            onError: (e) => {
                              e.target.src = `https://via.placeholder.com/40/13131A/FFFFFF?text=${item.title[0]}`;
                            }
                          }}
                        />
                      </ListItemAvatar>
                      <ListItemText 
                        primary={item.title}
                        secondary={item.views}
                        primaryTypographyProps={{ fontWeight: 500 }}
                      />
                    </ListItem>
                    {index < trending.length - 1 && <Divider />}
                  </Box>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
