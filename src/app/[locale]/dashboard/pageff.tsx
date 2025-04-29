import DashboardCard from "@/components/DashboardCard/DashboardCard";
import { Box, Grid } from "@mui/material";

// import WorkspacesGrid from "../setting/organization/Workspaces/components/WorkspacesGrid";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 12, lg: 6 }}>
        <DashboardCard title="contacts">
          <Box height={300}>
            {/* <ContactsProvider>
              <ContactsDrawer />
              <ContactsGrid />
            </ContactsProvider> */}
          </Box>
        </DashboardCard>
      </Grid>
      <Grid size={{ xs: 12, md: 12, lg: 6 }}>
        <DashboardCard title="workspaces">
          <Box height={300}>{/* <WorkspacesGrid /> */}</Box>
        </DashboardCard>
      </Grid>
    </Grid>
  );
};

export default Home;
