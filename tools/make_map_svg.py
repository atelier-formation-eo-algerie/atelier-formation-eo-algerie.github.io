"""Generate an SVG outline of Algeria and neighbours from Natural Earth 1:50m (public domain).
Usage: python make_map_svg.py <ne_50m_admin_0_countries.geojson> <out.svg>"""
import sys, json, math
import geopandas as gpd
from shapely.geometry import box

src, out = sys.argv[1], sys.argv[2]
gdf = gpd.read_file(src)
W_, S_, E_, N_ = -9.5, 18.5, 12.5, 37.8          # lon/lat window
clip = box(W_, S_, E_, N_)
lat0 = 28.0
kx = math.cos(math.radians(lat0))
scale = 40.0                                      # px per degree lat
def proj(x, y):
    return ((x - W_) * kx * scale, (N_ - y) * scale)
width, height = proj(E_, S_)

def path(geom):
    geom = geom.simplify(0.02, preserve_topology=True)
    polys = [geom] if geom.geom_type == "Polygon" else list(geom.geoms)
    d = []
    for p in polys:
        if p.is_empty or p.geom_type != "Polygon":
            continue
        for ring in [p.exterior, *p.interiors]:
            pts = [proj(x, y) for x, y in ring.coords]
            d.append("M" + " L".join(f"{a:.1f},{b:.1f}" for a, b in pts) + "Z")
    return "".join(d)

dza = gdf[gdf["ADM0_A3"] == "DZA"].geometry.iloc[0]
others = gdf[(gdf["ADM0_A3"] != "DZA") & gdf.intersects(clip)]
nb = "".join(path(g.intersection(clip)) for g in others.geometry)
grat = []
for lon in range(-8, 13, 4):
    x, _ = proj(lon, 0); grat.append(f'<line x1="{x:.1f}" y1="0" x2="{x:.1f}" y2="{height:.1f}"/>')
for lat in range(20, 38, 4):
    _, y = proj(0, lat); grat.append(f'<line x1="0" y1="{y:.1f}" x2="{width:.1f}" y2="{y:.1f}"/>')

places = {"Alger": (3.06, 36.75), "Arzew": (-0.32, 35.85), "Adrar": (-0.29, 27.87),
          "Biskra": (5.73, 34.85), "Tamanrasset": (5.52, 22.79)}
pl = "".join(f'<circle class="m-pt" cx="{proj(*v)[0]:.1f}" cy="{proj(*v)[1]:.1f}" r="4" data-place="{k}"/>' for k, v in places.items())
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width:.0f} {height:.0f}" role="img" aria-labelledby="mapTitle">
<title id="mapTitle">Contour de l'Algérie (Natural Earth, 1:50 m)</title>
<g class="m-grat">{''.join(grat)}</g>
<path class="m-nb" d="{nb}"/>
<path class="m-dz" d="{path(dza)}"/>
<g class="m-pts">{pl}</g>
</svg>'''
open(out, "w", encoding="utf-8").write(svg)
print(f"{width:.0f}x{height:.0f}", len(svg), "bytes")
for k, v in places.items(): print(k, [round(c, 1) for c in proj(*v)])
