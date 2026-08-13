# Por Ibarra Todo — Ibarra Civic Radar

Proyecto: Ibarra Civic Radar (poribarratodo)
Descripción corta: Monitor de conversación pública y cobertura mediática para la precandidatura de Juan Arias — panel interactivo pensado para equipos de campaña y comunicación local.

Resumen del proyecto
- Interfaz ligera (HTML/CSS/JS) que procesa CSVs con registros de medios y redes sociales y genera dashboards: Inicio, Tendencias, Mapa de calor por circunscripciones, paneles por plataforma (Instagram / Facebook / TikTok), Noticias, Narrativas y Verificación.
- Pensado para equipos locales: permite actualizar datos arrastrando un CSV, aplicar filtros, extraer hashtags por plataforma y priorizar acciones comunicacionales.

Por qué es una oportunidad de negocio
- Herramienta focalizada en campañas locales y gobiernos municipales: mercado con necesidades repetibles (consultoras, partidos, precandidaturas, ONGs).
- Bajo coste de entrada: es una web estática que puede desplegarse en hosting económico y empaquetarse con integración a hojas de cálculo / flujos de ingestión CSV.
- Posibilidades de monetización recurrente: suscripciones para acceso a fuentes en tiempo real (integración con APIs de social listening), personalización por cliente (branding, métricas a medida), y servicios profesionales (análisis, dashboards personalizados y soporte).

Modelos de monetización sugeridos
1. SaaS (suscripción mensual)
   - Plan Básico: carga manual de CSV, 1 usuario, acceso a dashboards, soporte por email.
   - Plan Profesional: integración con APIs (Facebook/Instagram/TikTok), ingestión automática, alertas por email/Slack, 3 usuarios.
   - Plan Agencia: múltiples campañas, exportes avanzados, asistencia prioritaria y entrenamiento.

2. Servicios adicionales (one-off / retainer)
   - Curaduría de datos y pipelines (normalización de CSV y scraping legal de medios locales).
   - Mapas territoriales y modelado de circunscripciones con geocodificación y auditoría de datos.
   - Consultoría estratégica: paquetes de recomendaciones de comunicación y guiones para redes.

3. White-label y licencias institucionales
   - Licencia para partidos, consultoras y medios: implementación white-label, integración con marca y hosting propio.

Propuesta de valor para clientes
- Rápida visibilidad: transforma datos locales en decisiones (qué temas impulsar, qué hashtags usar, dónde concentrar actividades de terreno).
- Transparencia y trazabilidad: cada registro mantiene fuente y URL, ideal para compliance y comunicación responsable.
- Bajo riesgo técnico: funciona offline con CSVs si la integración con APIs no es posible por restricciones de acceso.

Cómo probarlo (rápido)
1. Clona el repo y abre `index.html` en un servidor local (por ejemplo: `python -m http.server` en la carpeta del proyecto). 
2. Sube el CSV de ejemplo `sample_enriched_ibarra.csv` desde la pestaña "Datos" → "Actualizar datos (CSV)". 
3. Revisa: Tendencias (hashtags por plataforma), Mapa de calor (circunscripciones), y paneles de Instagram/Facebook/TikTok.

Siguientes pasos recomendados (mínimos para un MVP comercial)
- Integrar autenticación y gestión de usuarios.
- Conectar integraciones opcionales con APIs de redes para ingestión automatizada.
- Añadir exportes automáticos (CSV/Excel/PDF) y notificaciones por email/Slack.
- Documentación de CSV y onboarding para clientes (plantillas y validadores).

Contacto y licencia
- Autor / repositorio: slddarias036-art/poribarratodo
- Propósito: prototipo analítico; licencia: MIT (sugerida — ajustar según necesidad legal).

---

Elevator pitch (1 línea):
Ibarra Civic Radar transforma la conversación local en decisiones de campaña accionables — desde hashtags virales hasta mapas de calor por circunscripción — con una plataforma ligera, fácil de desplegar y pensada para monetizar mediante integraciones y consultoría especializada.
