# Ground Check

A phone app for checking set-out and construction of the Nithi Bridge foundations and piers against the design. It works offline and keeps everything on the device.

## What it does

**Check**
Compare a ground reading (Easting, Northing, level) with the design value for a pile, shaft or column corner, pier centre or base level. The app shows the horizontal offset, the Easting and Northing differences, the offset across and along the bridge, and the level difference. Each result is marked within or out of tolerance. Readings can be saved with a note.

**Record**
Fill in the pile construction record for each pile. For every pile you choose whether it is hand-dug or built with a drilling rig, and the matching form opens.
- Hand-dug record: pile details, excavation record, staged excavation and concrete lining table, reinforcement cage, concreting record and sign-off. It works out the cumulative depth, the toe level reached, the depth still to dig and the concrete volume ratio.
- Bored pile record: boring details, steel casing, reinforcement, concreting, bore log and sign-off. It works out penetration, hole depth and the volume ratio.
- Design values (pile head, toe, length, diameter, reinforcement) are filled in from the drawings and can be overwritten.

**Design**
Design values for each pier and abutment: base, shaft type, centre coordinates, top of base, pile head level, top of column, and the coordinates of every pile and shaft point.

**Log**
All saved readings, with a filter by pier or abutment, a count of readings within and out of tolerance, and delete.

**Settings**
Tolerances for pile, shaft, centre and level checks.

## Moving around

A bar at the top of the Check, Record and Design screens shows the current pier or abutment and its piles. Use the arrows to step to the next or previous pier, tap the pier name to pick from a grid of all piers, and tap a pile to switch to it. Each pile chip shows its progress (digging, reached toe, concreted), whether a reading is saved, and whether it is hand-dug (H) or drilling rig (R). The app opens where you left off.

## Exports (CSV)

- Readings log: one row per saved reading.
- Hand-dug record in form layout: one block per pile, with the sections, wording and order of the paper form.
- Hand-dug record, one row per pile: a flat table of the same fields.
- Hand-dug staged rows: the staged excavation table with the pile number.
- Bored pile records: one row per pile.
- Pile progress: status, depth and lining top level per pile, for the geodatabase.

## Data

Coordinates are Arc 1960 / UTM zone 37S (EPSG:21037). Pile head level is the top of the base less the base thickness. Pile toe level is the head level less the design pile length.

Readings and records are saved on the device, so export a CSV regularly.
