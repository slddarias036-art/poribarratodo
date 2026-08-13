// ============================================================
// DASHBOARD ENRICHED - VISUALIZACIONES ENRIQUECIDAS
// Renderiza gráficos y dashboards con datos analizados y simulados
// ============================================================
(function() {

  /**
   * Renderiza KPIs enriquecidos en la sección de inicio
   */
  function renderEnrichedKPIs(enrichedData) {
    const container = document.getElementById('content');
    if (!container) return;

    const totalRecords = enrichedData.length;
    const totalInteractions = enrichedData.reduce((sum, d) => sum + (d.interacciones || 0), 0);
    const totalViews = enrichedData.reduce((sum, d) => sum + (d.visualizaciones || 0), 0);
    const avgEngagement = enrichedData.reduce((sum, d) => sum + (d.engagement_score || 0), 0) / totalRecords;

    // Contar sentimientos
    const sentimientos = { Positivo: 0, Negativo: 0, Neutral: 0 };
    enrichedData.forEach(d => {
      const sent = d.sentimiento_inferido || 'Neutral';
      if (sentimientos[sent] !== undefined) sentimientos[sent]++;
    });

    const kpiHtml = `
      <section class="block" id="kpi-section">
        <div class="sec-head">
          <h2>📊 KPIs Enriquecidos</h2>
          <span class="sec-note">Análisis en tiempo real con IA generativa</span>
        </div>
        <div class="kpi-row">
          <div class="kpi">
            <div class="v">${totalRecords}</div>
            <div class="l">📝 Registros</div>
          </div>
          <div class="kpi">
            <div class="v">${totalInteractions.toLocaleString()}</div>
            <div class="l">💬 Interacciones</div>
          </div>
          <div class="kpi">
            <div class="v">${totalViews.toLocaleString()}</div>
            <div class="l">👁️ Visualizaciones</div>
          </div>
          <div class="kpi">
            <div class="v">${avgEngagement.toFixed(0)}</div>
            <div class="l">⚡ Engagement Avg</div>
          </div>
          <div class="kpi">
            <div class="v">${sentimientos.Positivo}</div>
            <div class="l">😊 Sentimiento +</div>
          </div>
          <div class="kpi">
            <div class="v">${sentimientos.Negativo}</div>
            <div class="l">😞 Sentimiento -</div>
          </div>
          <div class="kpi">
            <div class="v">${sentimientos.Neutral}</div>
            <div class="l">😐 Sentimiento ~</div>
          </div>
        </div>
      </section>
    `;

    if (container.innerHTML === '' || !container.querySelector('#kpi-section')) {
      container.innerHTML = kpiHtml + container.innerHTML;
    } else {
      const kpiSection = container.querySelector('#kpi-section');
      if (kpiSection) kpiSection.innerHTML = kpiHtml.split('<section')[1].split('</section>')[0] + '</section>';
    }
  }

  /**
   * Renderiza gráfico de evolución de interacciones por tema
   */
  function renderInteractionTrends(enrichedData) {
    const canvas = document.getElementById('chartInteractionTrends');
    if (!canvas || typeof Chart === 'undefined') return;

    // Agrupar por tema y fecha
    const byTema = {};
    enrichedData.forEach(d => {
      const tema = d.tema_clasificado || d.tema || 'Otros';
      if (!byTema[tema]) byTema[tema] = { total: 0, count: 0 };
      byTema[tema].total += d.interacciones || 0;
      byTema[tema].count += 1;
    });

    const temas = Object.keys(byTema).sort((a, b) => byTema[b].total - byTema[a].total).slice(0, 8);
    const valores = temas.map(t => byTema[t].total);

    const ctx = canvas.getContext('2d');
    if (canvas.chart) canvas.chart.destroy();

    canvas.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: temas,
        datasets: [{
          label: 'Interacciones por Tema',
          data: valores,
          backgroundColor: 'rgba(227, 6, 19, 0.7)',
          borderColor: 'rgba(139, 0, 26, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } }
      }
    });
  }

  /**
   * Renderiza gráfico de sentimiento por circunscripción
   */
  function renderSentimentByCircunscripcion(enrichedData, narrativas) {
    const canvas = document.getElementById('chartSentimentCircunscripcion');
    if (!canvas || typeof Chart === 'undefined') return;

    const circunscripciones = Object.keys(narrativas || {});
    const posData = [];
    const negData = [];
    const neuData = [];

    circunscripciones.forEach(circ => {
      const items = enrichedData.filter(d => d.circunscripcion === circ);
      const positivos = items.filter(d => d.sentimiento_inferido === 'Positivo').length;
      const negativos = items.filter(d => d.sentimiento_inferido === 'Negativo').length;
      const neutrales = items.filter(d => d.sentimiento_inferido === 'Neutral').length;

      posData.push(positivos);
      negData.push(negativos);
      neuData.push(neutrales);
    });

    const ctx = canvas.getContext('2d');
    if (canvas.chart) canvas.chart.destroy();

    canvas.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: circunscripciones.length ? circunscripciones : ['Sin datos'],
        datasets: [
          {
            label: '😊 Positivo',
            data: posData,
            backgroundColor: 'rgba(76, 175, 80, 0.7)',
            borderColor: 'rgba(56, 142, 60, 1)',
            borderWidth: 1
          },
          {
            label: '😞 Negativo',
            data: negData,
            backgroundColor: 'rgba(244, 67, 54, 0.7)',
            borderColor: 'rgba(211, 47, 47, 1)',
            borderWidth: 1
          },
          {
            label: '😐 Neutral',
            data: neuData,
            backgroundColor: 'rgba(158, 158, 158, 0.7)',
            borderColor: 'rgba(66, 66, 66, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { x: { stacked: false }, y: { stacked: false } }
      }
    });
  }

  /**
   * Renderiza nube de hashtags tendencias
   */
  function renderHashtagsTrends(enrichedData) {
    const container = document.getElementById('hashtagsTrends');
    if (!container) return;

    const hashtagCount = {};
    enrichedData.forEach(d => {
      (d.hashtags || []).forEach(tag => {
        hashtagCount[tag] = (hashtagCount[tag] || 0) + 1;
      });
    });

    const topHashtags = Object.entries(hashtagCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20);

    const html = `
      <div class="sec-head">
        <h2>#️⃣ Hashtags Tendencias</h2>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${topHashtags.map(([tag, count]) => `
          <span class="badge tag" style="font-size: ${0.7 + count / 50}rem; opacity: ${0.6 + count / 500};">
            ${tag} (${count})
          </span>
        `).join('')}
      </div>
    `;

    container.innerHTML = html;
  }

  /**
   * Renderiza tabla de proyecciones de escenarios
   */
  function renderScenarioProjections(projections) {
    const container = document.getElementById('scenarioProjections');
    if (!container) return;

    const scenariosList = projections.projections || {};
    
    const html = `
      <div class="sec-head">
        <h2>🎯 Proyecciones de Escenarios</h2>
        <span class="sec-note">3 meses de simulación predictiva</span>
      </div>
      <div class="trend-grid">
        ${Object.entries(scenariosList).map(([key, scenario]) => {
          const mes3 = scenario.proyecciones.filter(p => p.mes === 3)[0];
          return `
            <div class="trend-card">
              <div style="font-weight: 700; color: var(--primary); margin-bottom: 8px;">
                ${scenario.nombre}
              </div>
              <div style="font-size: 0.85rem; color: var(--muted); margin-bottom: 10px;">
                ${scenario.descripcion}
              </div>
              <div style="background: rgba(227, 6, 19, 0.05); padding: 10px; border-radius: 8px; font-size: 0.8rem;">
                <div><strong>Mes 3 Proyectado:</strong></div>
                <div>💬 Interacciones: ${mes3 ? mes3.interacciones_proyectadas.toLocaleString() : 'N/A'}</div>
                <div>👁️ Visualizaciones: ${mes3 ? mes3.visualizaciones_proyectadas.toLocaleString() : 'N/A'}</div>
                <div>🎲 Confianza: ${(scenario.confianza_promedio * 100).toFixed(0)}%</div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    container.innerHTML = html;
  }

  /**
   * Renderiza narrativas por circunscripción
   */
  function renderNarratives(narrativas) {
    const container = document.getElementById('narrativesContainer');
    if (!container) return;

    const html = `
      <div class="sec-head">
        <h2>📖 Narrativas por Circunscripción</h2>
        <span class="sec-note">Análisis contextualizado de conversación pública</span>
      </div>
      <div style="display: grid; gap: 16px;">
        ${Object.entries(narrativas || {}).map(([circ, narr]) => `
          <div class="card">
            <div style="font-weight: 700; color: var(--secondary); margin-bottom: 8px; font-size: 1rem;">
              📍 ${narr.titulo}
            </div>
            <div style="color: var(--text); line-height: 1.6; margin-bottom: 12px;">
              ${narr.descripcion}
            </div>
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              ${(narr.topicos || []).slice(0, 4).map(t => `
                <span class="badge plat">${t}</span>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    container.innerHTML = html;
  }

  /**
   * Renderiza plataforma y fuentes más activas
   */
  function renderPlatformsAnalysis(enrichedData) {
    const container = document.getElementById('platformsAnalysis');
    if (!container) return;

    const byPlat = {};
    enrichedData.forEach(d => {
      const plat = d.plataforma || 'Otros';
      if (!byPlat[plat]) byPlat[plat] = { interacciones: 0, visualizaciones: 0, count: 0 };
      byPlat[plat].interacciones += d.interacciones || 0;
      byPlat[plat].visualizaciones += d.visualizaciones || 0;
      byPlat[plat].count += 1;
    });

    const html = `
      <div class="sec-head">
        <h2>📱 Actividad por Plataforma</h2>
      </div>
      <div class="trend-grid">
        ${Object.entries(byPlat).map(([plat, stats]) => `
          <div class="trend-card">
            <div style="font-weight: 700; color: var(--secondary); margin-bottom: 8px;">
              ${plat}
            </div>
            <div style="font-size: 0.9rem; line-height: 1.8;">
              <div>📊 Registros: ${stats.count}</div>
              <div>💬 Interacciones: ${stats.interacciones.toLocaleString()}</div>
              <div>👁️ Visualizaciones: ${stats.visualizaciones.toLocaleString()}</div>
              <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--line);">
                <strong>Promedio/registro:</strong> ${Math.round(stats.interacciones / stats.count)} int.
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    container.innerHTML = html;
  }

  /**
   * Event listener para simulations-ready
   */
  document.addEventListener('simulations-ready', function(e) {
    try {
      const { projections, simulacionesTemas } = e.detail;
      const enrichedData = window.ENRICHED_DATA;
      const narrativas = window.NARRATIVAS;

      console.log('🎨 Renderizando dashboards enriquecidos...');

      if (enrichedData) {
        renderEnrichedKPIs(enrichedData);
        renderInteractionTrends(enrichedData);
        renderSentimentByCircunscripcion(enrichedData, narrativas);
        renderHashtagsTrends(enrichedData);
        renderPlatformsAnalysis(enrichedData);
      }

      if (projections) {
        renderScenarioProjections(projections);
      }

      if (narrativas) {
        renderNarratives(narrativas);
      }

      console.log('✅ Dashboards enriquecidos renderizados');

    } catch (error) {
      console.error('Error en dashboard-enriched:', error);
    }
  });

  // Exponer funciones
  window.renderEnrichedKPIs = renderEnrichedKPIs;
  window.renderInteractionTrends = renderInteractionTrends;
  window.renderSentimentByCircunscripcion = renderSentimentByCircunscripcion;
  window.renderHashtagsTrends = renderHashtagsTrends;
  window.renderScenarioProjections = renderScenarioProjections;
  window.renderNarratives = renderNarratives;
  window.renderPlatformsAnalysis = renderPlatformsAnalysis;

})();
