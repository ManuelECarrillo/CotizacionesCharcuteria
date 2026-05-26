# Antha's Cava - Cotizador local

Primera version local del cotizador. Abre `index.html` en el navegador para usarlo.

## Flujo actual

- `Cotizador`: arma un pedido con una o varias partidas y calcula el total.
- `Catalogo`: guarda precios base de ingredientes en este navegador.
- `Historial`: guarda cotizaciones en `localStorage`.
- `Simple / Avanzada`: cambia entre cotizacion rapida y desglose de receta.
- `Molde`: guarda la cotizacion actual como nueva plantilla.
- `Partida`: agrega otra tabla diferente al mismo pedido.
- `Extras`: agrega cargos o costos adicionales por pedido.
- `Compras`: copia una lista de compras estimada.
- `WhatsApp`: abre WhatsApp con el resumen listo.
- `PDF`: imprime una version para cliente sin costos internos.
- `Respaldo / Importar`: exporta o recupera catalogo, plantillas y cotizaciones.

## Formula

Replica la formula vista en el Excel:

```text
costo ingredientes = suma(costo compra / cantidad neta * cantidad usada)
utilidad = (costo ingredientes + costos indirectos) * margen
precio sugerido = costo ingredientes + utilidad
```

El campo `Precio final` permite redondear o ajustar manualmente.
