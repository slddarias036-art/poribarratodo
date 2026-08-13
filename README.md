# Ibarra Civic Radar — Monetizable Project Idea

Una versión mejorada de *Ibarra Civic Radar* que carga datos en tiempo real desde un CSV público y ofrece análisis y visualizaciones para clientes locales (medios, campañas, consultoras).

Características principales

- Carga automática del CSV alojado (ej.: GitHub raw) al hacer click en "Actualizar datos".
- Análisis en el navegador: tendencias, mapa de calor, verificación, tablas, gráficos (Chart.js + PapaParse).
- API/Integración opcional: servir el CSV desde un endpoint que permita autenticación y métricas.
- Paneles personalizables y exportación (CSV/PDF).

Ideas de monetización

- Planes SaaS: nivel gratuito con datos limitados y suscripción para datos históricos y exportes.
- Servicios de consultoría de análisis a gobiernos locales y organizaciones civiles.
- Integración de alertas premium (email/SMS) y dashboards privados para clientes.
- White-label para consultoras y medios.

Cómo integrar el cargador automático (instrucciones rápidas)

1. Añade el archivo `data-loader.js` al repositorio (ya incluido en este commit).
2. Inserta una referencia en `index.html` justo antes del cierre del `</body>`:

```html
<script src="app.js"></script>
<script src="data-loader.js"></script>
</body>
```

3. Ajusta la constante `CSV_URL` dentro de `data-loader.js` al enlace raw donde está tu CSV (por ejemplo `https://raw.githubusercontent.com/<owner>/<repo>/main/archivo.csv`).
4. Asegúrate de que el origen que sirve el CSV soporte CORS (raw.githubusercontent.com funciona correctamente).

Notas técnicas

- `data-loader.js` expone los datos en `window.CSV_DATA` y lanza el evento `csv-updated` cuando los datos cambian.
- Si tu aplicación ya tiene un callback `onCSVLoaded`, el cargador llamará a esa función automáticamente.

Siguientes pasos

- Puedo actualizar `index.html` y `app.js` para integrar el cargador directamente si quieres que haga los cambios automáticamente.
- También puedo añadir un pequeño servidor (Node/Express) para servir y proteger el CSV si deseas control de actualizaciones en tiempo real.

---

Si quieres que aplique los cambios directamente en `index.html` y `app.js` (para que el botón haga fetch sin editar manualmente), dime y lo hago: reemplazaré las líneas necesarias y haré commit.
