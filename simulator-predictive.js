// ============================================================
// SIMULATOR PREDICTIVE - PROYECCIONES Y ESCENARIOS
// Simula interacciones futuras basadas en patrones observados
// ============================================================
(function() {

  /**
   * Define escenarios predefinidos de cambio
   */
  const SCENARIOS = {
    'tiktok_movilidad': {
      nombre: 'Más publicaciones TikTok sobre Movilidad',
      descripcion: 'Incremento en contenido TikTok enfocado en transporte y tren',
      cambios: {
        plataforma: 'TikTok',
        tema: 'Movilidad y transporte',
        multiplicador_interacciones: 1.5,
        multiplicador_visualizaciones: 2.0,
        probabilidad: 0.75
      }
    },
    'facebook_agua': {
      nombre: 'Más posts Facebook sobre Agua Potable',
      descripcion: 'Estrategia enfocada en agua potable en Facebook',
      cambios: {
        plataforma: 'Facebook',
        tema: 'Agua potable',
        multiplicador_interacciones: 1.3,
        multiplicador_visualizaciones: 1.6,
        probabilidad: 0.70
      }
    },
    'instagram_mercado': {
      nombre: 'Campaña Instagram - Mercado Amazonas',
      descripcion: 'Reel y stories intensivos sobre modernización del mercado',
      cambios: {
        plataforma: 'Instagram',
        tema: 'Mercado Amazonas',
        multiplicador_interacciones: 1.8,
        multiplicador_visualizaciones: 2.5,
        probabilidad: 0.80
      }
    },
    'medios_proceso_electoral': {
      nombre: 'Cobertura mediática - Proceso Electoral',
      descripcion: 'Aumento de cobertura en medios digitales sobre campaña',
      cambios: {
        plataforma: 'Medios digitales',
        tema: 'Proceso electoral / candidatura',
        multiplicador_interacciones: 1.4,
        multiplicador_visualizaciones: 1.9,
        probabilidad: 0.85
      }
    },
    'empleo_multiplataforma': {
      nombre: 'Campaña Multiplataforma - Empleo Joven',
      descripcion: 'Empleo como eje transversal en todas las plataformas',
      cambios: {
        tema: 'Empleo',
        multiplicador_interacciones: 1.6,
        multiplicador_visualizaciones: 1.8,
        afecta_todas_plataformas: true,
        probabilidad: 0.72
      }
    }
  };

  /**
   * Calcula estadísticas base de interacción por plataforma/tema
   */
  function calculateBaseStats(datos) {
    const stats = {
      por_plataforma: {},
      por_tema: {},
      global: {
        promedio_interacciones: 0,
        promedio_visualizaciones: 0,
        promedio_comentarios: 0,
        promedio_compartidos: 0
      }
    };

    if (!datos.length) return stats;

    // Agrupar por plataforma
    datos.forEach(item => {
      const plat = item.plataforma || 'Otros';
      if (!stats.por_plataforma[plat]) {
        stats.por_plataforma[plat] = {
          count: 0,
          interacciones: 0,
          visualizaciones: 0,
          promedio_interacciones: 0
        };
      }
      stats.por_plataforma[plat].count += 1;
      stats.por_plataforma[plat].interacciones += item.interacciones || 0;
      stats.por_plataforma[plat].visualizaciones += item.visualizaciones || 0;
    });

    // Agrupar por tema
    datos.forEach(item => {
      const tema = item.tema || 'Otros';
      if (!stats.por_tema[tema]) {
        stats.por_tema[tema] = {
          count: 0,
          interacciones: 0,
          visualizaciones: 0,
          promedio_interacciones: 0
        };
      }
      stats.por_tema[tema].count += 1;
      stats.por_tema[tema].interacciones += item.interacciones || 0;
      stats.por_tema[tema].visualizaciones += item.visualizaciones || 0;
    });

    // Calcular promedios
    Object.keys(stats.por_plataforma).forEach(plat => {
      const p = stats.por_plataforma[plat];
      p.promedio_interacciones = p.interacciones / p.count;
    });

    Object.keys(stats.por_tema).forEach(tema => {
      const t = stats.por_tema[tema];
      t.promedio_interacciones = t.interacciones / t.count;
    });

    const totalInteracciones = datos.reduce((sum, d) => sum + (d.interacciones || 0), 0);
    const totalVisualiz = datos.reduce((sum, d) => sum + (d.visualizaciones || 0), 0);
    const totalComentarios = datos.reduce((sum, d) => sum + (d.comentarios || 0), 0);
    const totalCompartidos = datos.reduce((sum, d) => sum + (d.compartidos || 0), 0);

    stats.global.promedio_interacciones = totalInteracciones / datos.length;
    stats.global.promedio_visualizaciones = totalVisualiz / datos.length;
    stats.global.promedio_comentarios = totalComentarios / datos.length;
    stats.global.promedio_compartidos = totalCompartidos / datos.length;

    return stats;
  }

  /**
   * Proyecta interacciones futuras para un escenario
   */
  function projectScenario(scenarioKey, baseStats, tiempoMeses = 3) {
    const scenario = SCENARIOS[scenarioKey];
    if (!scenario) return null;

    const proyecciones = [];
    const cambios = scenario.cambios;

    // Generar proyecciones mensuales
    for (let mes = 1; mes <= tiempoMeses; mes++) {
      let contador = 0;

      // Aplicar proyección a items que encajen con el escenario
      for (const [plat, platStats] of Object.entries(baseStats.por_plataforma)) {
        if (!cambios.afecta_todas_plataformas && cambios.plataforma && plat !== cambios.plataforma) {
          continue;
        }

        for (const [tema, temaStats] of Object.entries(baseStats.por_tema)) {
          if (cambios.tema && tema !== cambios.tema) {
            continue;
          }

          // Calcular proyección con crecimiento acelerado
          const crec = Math.pow(1 + (mes / tiempoMeses) * 0.3, 2);
          
          proyecciones.push({
            mes: mes,
            plataforma: plat,
            tema: tema,
            interacciones_proyectadas: Math.round(platStats.promedio_interacciones * cambios.multiplicador_interacciones * crec),
            visualizaciones_proyectadas: Math.round((baseStats.global.promedio_visualizaciones * cambios.multiplicador_visualizaciones * crec)),
            confianza: scenario.cambios.probabilidad,
            escenario: scenarioKey
          });

          contador += 1;
        }
      }

      if (contador === 0) {
        // Fallback: proyectar incremento global
        proyecciones.push({
          mes: mes,
          plataforma: cambios.plataforma || 'Global',
          tema: cambios.tema || 'Global',
          interacciones_proyectadas: Math.round(baseStats.global.promedio_interacciones * cambios.multiplicador_interacciones * mes),
          visualizaciones_proyectadas: Math.round(baseStats.global.promedio_visualizaciones * cambios.multiplicador_visualizaciones * mes),
          confianza: scenario.cambios.probabilidad,
          escenario: scenarioKey
        });
      }
    }

    return {
      escenario: scenarioKey,
      nombre: scenario.nombre,
      descripcion: scenario.descripcion,
      proyecciones: proyecciones,
      confianza_promedio: scenario.cambios.probabilidad,
      generado_en: new Date().toISOString()
    };
  }

  /**
   * Genera todas las proyecciones de escenarios
   */
  function generateAllProjections(datos) {
    const baseStats = calculateBaseStats(datos);
    const allProjections = {};

    Object.keys(SCENARIOS).forEach(scenarioKey => {
      try {
        allProjections[scenarioKey] = projectScenario(scenarioKey, baseStats, 3);
      } catch (e) {
        console.warn(`Error proyectando escenario ${scenarioKey}:`, e);
      }
    });

    return {
      base_stats: baseStats,
      projections: allProjections,
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Simula evolución de tema en próximos X meses
   */
  function simulateTopicGrowth(tema, datos, meses = 6) {
    const itemsDelTema = datos.filter(d => d.tema === tema || d.tema_clasificado === tema);
    
    if (!itemsDelTema.length) return null;

    const promedioInteracciones = itemsDelTema.reduce((sum, d) => sum + (d.interacciones || 0), 0) / itemsDelTema.length;
    
    const simulacion = [];
    for (let m = 1; m <= meses; m++) {
      // Crecimiento con volatilidad
      const volatilidad = 0.8 + Math.random() * 0.4;
      const crecimiento = 1 + (m / meses) * 0.5;
      
      simulacion.push({
        mes: m,
        interacciones_esperadas: Math.round(promedioInteracciones * crecimiento * volatilidad),
        rango_bajo: Math.round(promedioInteracciones * crecimiento * 0.7),
        rango_alto: Math.round(promedioInteracciones * crecimiento * 1.3)
      });
    }

    return {
      tema: tema,
      items_historicos: itemsDelTema.length,
      promedio_interacciones_actual: Math.round(promedioInteracciones),
      simulacion_6meses: simulacion
    };
  }

  // Event listener para data-enriched (cuando analytics-radar completa)
  document.addEventListener('data-enriched', function(e) {
    try {
      const { enrichedData } = e.detail;
      
      console.log('📊 Iniciando simulaciones predictivas...');

      // Generar proyecciones
      const projections = generateAllProjections(enrichedData);

      // Simular crecimiento de temas principales
      const temasPrincipales = [...new Set(enrichedData.map(d => d.tema))].slice(0, 5);
      const simulacionesTemas = {};
      
      temasPrincipales.forEach(tema => {
        simulacionesTemas[tema] = simulateTopicGrowth(tema, enrichedData, 6);
      });

      // Guardar en caché
      window.PREDICTIVE_PROJECTIONS = projections;
      window.TOPIC_SIMULATIONS = simulacionesTemas;

      try {
        localStorage.setItem('ibarra_radar_projections', JSON.stringify(projections));
        localStorage.setItem('ibarra_radar_topic_simulations', JSON.stringify(simulacionesTemas));
      } catch (e) {
        console.warn('No se pudo guardar simulaciones en caché', e);
      }

      // Disparar evento de simulación completada
      document.dispatchEvent(new CustomEvent('simulations-ready', {
        detail: { projections, simulacionesTemas }
      }));

      console.log('✅ Simulaciones predictivas completadas');

    } catch (error) {
      console.error('Error en simulator-predictive:', error);
    }
  });

  // Exponer funciones globales
  window.calculateBaseStats = calculateBaseStats;
  window.projectScenario = projectScenario;
  window.generateAllProjections = generateAllProjections;
  window.simulateTopicGrowth = simulateTopicGrowth;
  window.AVAILABLE_SCENARIOS = SCENARIOS;

})();
