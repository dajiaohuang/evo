# Interactive map projections

The full Web, Android and iOS client offers **Mercator** and **Equal Earth (equal-area)** in the map toolbar. Drag with a mouse or one finger to change the view centre; arrow keys pan, `+`/`-` zoom and `Home` resets. Hide map panels for an unobstructed view. The selected projection, centre and zoom survive view switching and are included in shared Explorer URLs.

Mercator remains north-up and clips display at ±85.05112878° latitude. Equal Earth preserves relative spherical areas, includes the poles and rotates the spherical projection centre in longitude and latitude. It distorts shapes and directions. Neither mode changes the underlying coordinates or establishes alignment between independent scientific models.

Every camera update projects coastlines, tectonic layers, observation points, fossils and sample-centroid paths from geographic coordinates. Fossil clustering uses the current screen projection. Antimeridian clipping follows the chosen centre. Mixed source polygon winding is normalized only in a cached display copy so spherical complements do not fill the world; source coordinates and file hashes are unchanged.

Exact seam/pole vertices are offset inward by 0.0001 degrees in the display copy to resolve coincident polar edges in D3's spherical clipper. This prevents an Antarctic fragment from filling the projected ocean; immutable source files retain their exact coordinates.

While dragging, a cached zoom-dependent geographic display copy reduces line vertices and omits the smallest islands. The current camera still reprojects this geometry on every animation frame; it does not translate a previous bitmap. Releasing the pointer restores full source detail. Point clipping shares one projection stream per frame, and pending pointer updates coalesce to the latest camera.

The terrain worker retains one checksum-verified grid and inverse-projects viewport pixels through the same camera transform as vectors. Dragging uses a freshly projected coarse display preview; releasing the pointer refines the viewport. Obsolete worker responses cannot cover a newer camera, and camera/projection changes do not download the grid again. Bilinear spatial colour sampling is retained; geological frames are not interpolated.

The source manifest retains its original EPSG:3857 visualization defaults and polar-limit note. These describe the default Mercator presentation, not a restriction on the new Equal Earth renderer. Both source and delivery grids still contain the polar rows. Runtime projection state belongs to the application and does not alter the immutable scientific manifest.

GitHub Pages remains the separate static reading edition with discrete SVG maps. This feature changes the full interactive client, including its native builds.

## Validation

Tests cover forward/inverse centre agreement, local area ratios, spherical ring orientation and holes, antimeridian recutting, polar/corner clipping, terrain camera synchronization, stale-frame rejection, no extra grid download, and redraws before pointer release in Chromium, Firefox and WebKit.
