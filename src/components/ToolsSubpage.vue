<template>
  <SubpageHeader />
  <MobileHeader />
  <div class="px-4">
    <div class="container mb-4">
      <AdvancedToolkit />
      <PageEditor />
      <Editions />
      <ToolsForFilm />
      <Archive />
      <ProgramManager />
      <OffSeason />
      <PostStreams />
      <Sponsors />
      <Users />
      <TagLibrary />
      <ContactUs />
      <OctaFooter class="mt-64" />
    </div>
  </div>
</template>

<script>
import AdvancedToolkit from "./tools_subpage_components/AdvancedToolkit.vue";
import OctaFooter from "./OctaFooter.vue";
import ContactUs from "./ContactUs.vue";
import MobileHeader from "./MobileHeader.vue";
import SubpageHeader from "./SubpageHeader.vue";
import PageEditor from "./tools_subpage_components/PageEditor.vue";
import Editions from "./tools_subpage_components/Editions.vue";
import ToolsForFilm from "./tools_subpage_components/ToolsForFilm.vue";
import Archive from "./tools_subpage_components/Archive.vue";
import ProgramManager from "./tools_subpage_components/ProgramManager.vue";
import OffSeason from "./tools_subpage_components/OffSeason.vue";
import PostStreams from "./tools_subpage_components/PostStreams.vue";
import Sponsors from "./tools_subpage_components/Sponsors.vue";
import Users from "./tools_subpage_components/Users.vue";
import TagLibrary from "./tools_subpage_components/TagLibrary.vue";

export default {
  name: "ToolsSubpage",
  components: {
    AdvancedToolkit,
    OctaFooter,
    ContactUs,
    MobileHeader,
    SubpageHeader,
    PageEditor,
    Editions,
    ToolsForFilm,
    Archive,
    ProgramManager,
    OffSeason,
    PostStreams,
    Sponsors,
    Users,
    TagLibrary,
  },
};
</script>
